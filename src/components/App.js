import React from 'react';
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import PopupWithForm from './PopupWithForm';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import ImagePopup from './ImagePopup';
import api from '../utils/api.js';
import {CurrentUserContext,defaultUser} from '../contexts/CurrentUserContext';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard,setSelectedCard] = React.useState({name:'',link:''});
  const [currentUser,setCurrentUser] = React.useState(defaultUser);


function closeAllPopups() {
  setIsEditAvatarPopupOpen(false);
  setIsEditProfilePopupOpen(false);
  setIsAddPlacePopupOpen(false);
  setSelectedCard({name: '', link: ''});
}

function handleCardClick(card){
  setSelectedCard(card)
}

function handleEditAvatarClick(){
  setIsEditAvatarPopupOpen(true);
}

function handleEditProfileClick(){
  setIsEditProfilePopupOpen(true);
}
  
function handleAddPlaceClick(){
  setIsAddPlacePopupOpen(true);
}

React.useEffect(()=>{
  api.getUserInfo()
  .then(userData => {
    setCurrentUser(userData)
   })
  .catch((err) => {
    console.log(`${err}`);
  });
},[])

function handleUpdateUser(userData) {
  console.log(userData);
  api.setUserInfo(userData)
  .then(res => {
    setCurrentUser(res);
    closeAllPopups();
  })
  .catch((err) => {
    console.log(`${err}`);
  });
}

function handleUpdateAvatar(userData){
  api.changeAvatar(userData)
  .then(res => {
    setCurrentUser(res);
    closeAllPopups();
  })
  .catch((err) => {
    console.log(`${err}`);
  });
}

function handleAddPlace(cardData){
  api.addCard(cardData)
  .then(newCard => {
    setCards([newCard,...cards]);
    closeAllPopups();
  })
  .catch((err) => {
    console.log(`${err}`);
  });
}


const [cards,setCards] = React.useState([]);

React.useEffect(()=>{
  api.getCardsInfo()
  .then(cardData => {
    setCards(cardData);
})
.catch((err) => {
  console.log(`${err}`);
});
},[])

function handleCardLike(card) {
  const isLiked = card.likes.some(i => i._id === currentUser._id);
  api.changeLikeCardStatus(card._id, !isLiked)
  .then((newCard) => {
    setCards((state) => state.map((c) => c._id === card._id ? newCard : c));//разобрать
  })
  .catch((err) => {
    console.log(`${err}`);
  });
} 

function handleCardDelete(card) {
  api.deleteCard(card)
  .then(() => {
    setCards((state) => state.filter((c) => c._id !== card._id));
  })
  .catch((err) => {
    console.log(`${err}`);
  });
} 

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="page__container">
        <Header/>
        <Main 
          onCardClick={handleCardClick} 
          onEditProfile={handleEditProfileClick} 
          onAddPlace={handleAddPlaceClick} 
          onEditAvatar={handleEditAvatarClick}
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
          />
        <Footer/> 
        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser}/> 
        <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlace}/> 
        <PopupWithForm name="confirm" title="Вы уверены?" buttonText='Вы уверены?'>
        </PopupWithForm>
        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar}/> 
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        </div>
      </div>
  </CurrentUserContext.Provider>
  );
}

export default App;
