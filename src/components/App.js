import React from 'react';
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard,setSelectedCard] = React.useState({name:'',link:''});

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

  return (
  <div className="page">
    <div className="page__container">
    <Header/>
    <Main onCardClick={handleCardClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick}/>
    <Footer/>
    
    <PopupWithForm name="edit" title="Редактировать профиль" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} buttonText='Сохранить'>
      <input className="popup__input popup__input_type_name" type="text" name="user-name" id="name-input" placeholder="Имя" minLength="2" maxLength="40"  required />
      <span className="name-input-error"></span>
      <input className="popup__input popup__input_type_description" type="text" name="description" id="description-input" placeholder="Вид деятельности" minLength="2" maxLength="200" required />
      <span className="description-input-error"></span>
    </PopupWithForm>
    
    <PopupWithForm name="add-card" title="Новое место" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} buttonText='Создать'>
      <input className="popup__input popup__input_type_place" type="text" name="name" placeholder="Название" id="place-input" required minLength="2" maxLength="30" />
      <span className="place-input-error"></span>
      <input className="popup__input popup__input_type_link" type="url" name="link" placeholder="Ссылка на картинку" id="image-link-input" required />
      <span className="image-link-input-error"></span>
    </PopupWithForm>
    
    <PopupWithForm name="confirm" title="Вы уверены?" buttonText='Вы уверены?'>
      <h3 className="popup__header">Вы уверены?</h3>
    </PopupWithForm>
    
    <PopupWithForm name="avatar" title="Обновить аватар" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} buttonText='Сохранить'>
      <input className="popup__input popup__input_type_link" type="url" name="avatar" placeholder="Ссылка на аватар" id="image-avatar-input" required />
      <span className="image-avatar-input-error"></span>
    </PopupWithForm>
    
    <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
    </div>
  </div>
  );
}

export default App;
