
import avatarLogo from './../images/profile-image.jpg'
function Main() {

  function handleEditAvatarClick(){
    document.querySelector('.popup_type_avatar').classList.add('popup_opened')
  }

  function handleEditProfileClick(){
    document.querySelector('.popup_type_edit').classList.add('popup_opened')
  }
  
  function handleAddPlaceClick(){
    document.querySelector('.popup_type_add-card').classList.add('popup_opened')
  }

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-hover">
          <img src={avatarLogo} alt="Аватар пользователя" className="profile__image" />
          <button onClick={handleEditAvatarClick} className="profile__avatar-edit-button"></button>
        </div>
        <div className="profile__info">
          <div className="profile__name">
            <h1 className="profile__name-text">Жак-Ив Кусто</h1>
            <button onClick={handleEditProfileClick} className="profile__edit-button vector-element-opacity" type="button"></button>
          </div>
          <p className="profile__description">Исследователь океана</p>
        </div>
        <button  onClick={handleAddPlaceClick} className="profile__add-button vector-element-opacity" type="button">
        </button>
      </section>
      <section className="elements">
        <ul className="elements__list">
          <template id="newCard">
            <li className="elements__item">
              <img src="./images/karachaevsk_fillet.png" alt="plug" className="elements__image" />
              <button className="elements__delete-button vector-element-opacity" type="button"></button>
              <div className="elements__footer">
                <h2 className="elements__title"></h2>
                <div className="elements__likes-container">
                  <button className="elements__like-button vector-element-opacity" type="button"></button>
                  <p className="elements__likes-counter">2</p>
                </div>
              </div>
            </li>
          </template>
        </ul>
      </section>
    </main>
  )
}

export default Main;