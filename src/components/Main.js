import editAvatar from "../images/editAvatar.svg";
import editButton from "../images/EditButton.svg";
import addButton from "../images/AddButton.svg";


import {useContext} from "react";

import Card from "./Card"
import CurrentUserContext from "../contexts/CurrentUserContext";

export default function Main({onEditAvatar, onEditProfile, onAddPlace, onCardClick, cards, onCardDelete, onCardLike}) {
    const currentUser = useContext(CurrentUserContext);
    return (<>
        <main className="main">
            <section className="profile">
                <div className="profile__container">
                    <div onClick={onEditAvatar} className="profile__avatar-container">
                        <img src={currentUser.avatar} className="profile__avatar" alt="Фото профиля"/>
                        <img src={editAvatar} className="profile__edit-avatar" alt="Изменить"/>
                    </div>
                    <div className="profile__info">
                        <div className="profile__wrapper">
                            <h1 className="profile__name">{currentUser.name}</h1>
                            <button className="profile__edit-button" onClick={onEditProfile} type="button">
                                <img className="profile__img-edit" src={editButton} alt="изменить"/>
                            </button>
                        </div>
                        <p className="profile__activity">{currentUser.about}</p>
                    </div>
                </div>
                <button type="button" className="profile__add-button" onClick={onAddPlace}><img src={addButton}
                                                                                                alt="Добавить"/>
                </button>
            </section>
            <section className="photo-cards">
                <ul className="cards">
                    {cards.map((item) => {
                        return (<Card key={item._id} onCardLike={onCardLike} onCardDelete={onCardDelete} card={item} onCardClick={onCardClick}/>)
                    })}

                </ul>
            </section>
        </main>

        </>
    )
}