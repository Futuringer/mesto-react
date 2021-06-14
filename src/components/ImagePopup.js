function ImagePopup(){
  return(
    <div className="popup popup_type_open-image">
    <div className="popup__content">
      <button className="popup__close-button vector-element-opacity" type="button"></button>
      <img src="https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg" alt="plug" className="popup__image" />
      <h2 className="popup__image-header"></h2>
    </div>
  </div>
  )
}
export default ImagePopup;