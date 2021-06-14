function PopupWithForm(props) {
  return (
<div className={`popup popup_type_${props.name}`}>
  <div className="popup__container">
    <button className="popup__close-button vector-element-opacity" type="button">
    </button>
    <h3 className="popup__header">{props.title}</h3>
    <form className="popup__form" name={"props.name"}>
      {props.children}
      {/*<input className="popup__input popup__input_type_place" type="text" name="name" placeholder="Название" id="place-input" required minLength="2" maxLength="30" />
      <span className="place-input-error"></span>
      <input className="popup__input popup__input_type_link" type="url" name="link" placeholder="Ссылка на картинку" id="image-link-input" required />
      <span className="image-link-input-error"></span>
  <button className="popup__submit" type="submit">Создать</button>*/}
    </form>
  </div>
</div>
  );
}

export default PopupWithForm;

/*<div className="popup popup_type_add-card(props.name)">
  <div className="popup__container">
    <button className="popup__close-button vector-element-opacity" type="button">
    </button>
    <h3 className="popup__header">Новое место(props.title)</h3>
    <form className="popup__form" name="add-card(props.name)">
      <input className="popup__input popup__input_type_place" type="text" name="name" placeholder="Название" id="place-input" required minLength="2" maxLength="30" />
      <span className="place-input-error"></span>
      <input className="popup__input popup__input_type_link" type="url" name="link" placeholder="Ссылка на картинку" id="image-link-input" required />
      <span className="image-link-input-error"></span>
      <button className="popup__submit" type="submit">Создать</button>
    </form>
  </div>
</div>*/

/*<PopupWithForm name="add-card" title="Новое место">
      <input className="popup__input popup__input_type_place" type="text" name="name" placeholder="Название" id="place-input" required minLength="2" maxLength="30" />
      <span className="place-input-error"></span>
      <input className="popup__input popup__input_type_link" type="url" name="link" placeholder="Ссылка на картинку" id="image-link-input" required />
      <span className="image-link-input-error"></span>
      <button className="popup__submit" type="submit">Создать</button>
 </PopupWithForm>*/