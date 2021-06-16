function Card (props){
  function handleClick() {
    props.onCardClick(props.card);
  }  
  return (
    <li className="elements__item">
      <img src={props.card.link} alt="plug" className="elements__image" onClick={handleClick}/>
      <button className="elements__delete-button vector-element-opacity" type="button"></button>
      <div className="elements__footer">
        <h2 className="elements__title">{props.card.name}</h2>
        <div className="elements__likes-container">
          <button className="elements__like-button vector-element-opacity" type="button"></button>
          <p className="elements__likes-counter">{props.card.likes.length}</p>
        </div>
      </div>
    </li>
  )
}

export default Card;