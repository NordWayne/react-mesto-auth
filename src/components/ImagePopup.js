export default function ImagePopup(props){
    return(
        <div className= {props.card?"popup popup_photo popup_opened": "popup popup_photo"}>
            <div className="popup__photo-container">
                <button type="button" className="popup__close popup__close_photo" onClick={props.onClose}></button>
                <img className="popup__photo"
                     src={props.card.link} alt={props.card.name}/>
                <p className="popup__photo-title">{props.card.name}</p>
            </div>
        </div>
    )
}