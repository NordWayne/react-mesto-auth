import PopupWithForm from "./PopupWithForm";
import {useState} from "react";
export default function AddPlacePopup({isOpen,onClose,onAddPlace}){
    const [name, setName] = useState("")
    const [imageLink, setImageLink] = useState("");
    function handleNameChange(e){
        setName(e.target.value)
    }
    function handleImageLinkChange(e){
        setImageLink(e.target.value)
    }
    function handleSubmit(e){
        e.preventDefault();
        onAddPlace(name, imageLink);
        onClose();
        setName("")
        setImageLink("")
    }
    return(
        <PopupWithForm name="add" title="Новое место" isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
            <input required
                   minLength="2"
                   maxLength="30"
                   type="text"
                   name="name"
                   placeholder="Название"
                   id="card-name"
                   value={name}
                   onChange={handleNameChange}
                   className="popup__input popup__input_type_name popup__input_card-name"/>
            <span id="card-name-error" className="popup__error"></span>
            <input required
                   type="url"
                   name="link"
                   placeholder="Ссылка на картинку"
                   id="card-url"
                   value={imageLink}
                   onChange={handleImageLinkChange}
                   className="popup__input popup__input_type_activity popup__input_card-link"/>
            <span id="card-url-error" className="popup__error"></span>
            <button type="submit" className="popup__save">Сохранить</button>
        </PopupWithForm>
    )
}