
import api from '../utils/api.js'
import React from 'react';
import Card from './Card'
function Main(props) {
  const [userName,setUserName] = React.useState('asd');
  const [userDescription,setUserDescription] = React.useState('');
  const [userAvatar,setUserAvatar] = React.useState('');
  const [cards,setCards] = React.useState([]);
  React.useEffect(()=>{
    api.getUserInfo()
    .then(userData => {
      setUserName(userData.name)
      setUserDescription(userData.about)
      setUserAvatar(userData.avatar)
     })
    .catch((err) => {
      console.log(`${err}`);
    });
},[])

  React.useEffect(()=>{
    api.getCardsInfo()
    .then(cardData => {
      setCards(cardData);
  })
  .catch((err) => {
    console.log(`${err}`);
  });
},[])
  
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-hover">
          <img src={userAvatar} alt="Аватар пользователя" className="profile__image" />
          <button onClick={props.onEditAvatar} className="profile__avatar-edit-button"></button>
        </div>
        <div className="profile__info">
          <div className="profile__name">
            <h1 className="profile__name-text">{userName}</h1>
            <button onClick={props.onEditProfile} className="profile__edit-button vector-element-opacity" type="button"></button>
          </div>
          <p className="profile__description">{userDescription}</p>
        </div>
        <button  onClick={props.onAddPlace} className="profile__add-button vector-element-opacity" type="button">
        </button>
      </section>
      <section className="elements">
        <ul className="elements__list">
          {cards.map(card => (
          <Card onCardClick={props.onCardClick} card={card} key={card._id} />
          ))}
        </ul>
      </section>
    </main>
  )
}
export default Main;