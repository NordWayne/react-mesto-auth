import CurrentUserContext from "../contexts/CurrentUserContext";
import {useContext} from "react";
export default function Card({card,onCardClick,onCardLike,onCardDelete}){
    function handleClick(){
        onCardClick(card)
    }
    function handleLikeClick(){
        onCardLike(card)
    }
    function handleDeleteCard(){
        onCardDelete(card._id)
    }
    const currentUser = useContext(CurrentUserContext);
    const isOwn = card.owner._id === currentUser._id;
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    return(
        <li className="card">
            <img className="card__photo" src={card.link} alt={card.name} onClick={handleClick}/>
            {isOwn && <button className="card__delete" type="button" onClick={handleDeleteCard}></button>}
            <div className="card__bottom">
                <h2 className="card__title">{card.name}</h2>
                <div className="card__like-container">
                    <button type="button" className={isLiked ? "card__like card__like_liked":"card__like"} onClick={handleLikeClick}></button>
                    <p className = "card__like-counter">{card.likes.length}</p>
                </div>
            </div>
        </li>
    )

}