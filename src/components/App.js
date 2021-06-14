
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
function App() {
  return (
    <div className="App">
      <div className="page__container">
      <Header/>
      <Main/>
      <Footer/>
      {/*<div className="popup popup_type_edit">
        <div className="popup__container">
          <button className="popup__close-button vector-element-opacity" type="button">
          </button>
          <h3 className="popup__header">Редактировать профиль</h3>
          <form className="popup__form" name="user-info">
            <input className="popup__input popup__input_type_name" type="text" name="user-name" id="name-input" placeholder="Имя" minLength="2" maxLength="40"  required />
            <span className="name-input-error"></span>
            <input className="popup__input popup__input_type_description" type="text" name="description" id="description-input" placeholder="Вид деятельности" minLength="2" maxLength="200" required />
            <span className="description-input-error"></span>
            <button className="popup__submit" type="submit">Сохранить</button>
          </form>
        </div>
  </div>*/}

      <PopupWithForm name="edit" title="Редактировать профиль">
      <input className="popup__input popup__input_type_name" type="text" name="user-name" id="name-input" placeholder="Имя" minLength="2" maxLength="40"  required />
      <span className="name-input-error"></span>
      <input className="popup__input popup__input_type_description" type="text" name="description" id="description-input" placeholder="Вид деятельности" minLength="2" maxLength="200" required />
      <span className="description-input-error"></span>
      <button className="popup__submit" type="submit">Сохранить</button>
      </PopupWithForm>

      <PopupWithForm name="add-card" title="Новое место">
        <input className="popup__input popup__input_type_place" type="text" name="name" placeholder="Название" id="place-input" required minLength="2" maxLength="30" />
        <span className="place-input-error"></span>
        <input className="popup__input popup__input_type_link" type="url" name="link" placeholder="Ссылка на картинку" id="image-link-input" required />
        <span className="image-link-input-error"></span>
        <button className="popup__submit" type="submit">Создать</button>
      </PopupWithForm>

      <PopupWithForm name="confirm" title="Вы уверены?">
        <button className="popup__close-button vector-element-opacity" type="button">
          </button>
          <h3 className="popup__header">Вы уверены?</h3>
          <button className="popup__submit" type="submit">Да</button>
      </PopupWithForm>

        {/*<div className="popup popup_type_confirm">
          <div className="popup__container">
            <form className="popup__form" name="confirmation">
            <button className="popup__close-button vector-element-opacity" type="button">
            </button>
            <h3 className="popup__header">Вы уверены?</h3>
            <button className="popup__submit" type="submit">Да</button>
            </form>
          </div>
  </div>*/}

      <PopupWithForm name="avatar" title="Обновить аватар">
      <button className="popup__close-button vector-element-opacity" type="button">
        </button>
        <input className="popup__input popup__input_type_link" type="url" name="avatar" placeholder="Ссылка на аватар" id="image-avatar-input" required />
        <span className="image-avatar-input-error"></span>
        <button className="popup__submit" type="submit">Сохранить</button>
      </PopupWithForm>
        {/*<div className="popup popup_type_avatar">
          <div className="popup__container">
            <form className="popup__form" name="avatar">
            <button className="popup__close-button vector-element-opacity" type="button">
            </button>
            <h3 className="popup__header">Обновить аватар</h3>
            <input className="popup__input popup__input_type_link" type="url" name="avatar" placeholder="Ссылка на аватар" id="image-avatar-input" required />
            <span className="image-avatar-input-error"></span>
            <button className="popup__submit" type="submit">Сохранить</button>
            </form>
          </div>
</div>*/}
  <ImagePopup />
    </div>
  </div>
  );
}

export default App;
