import PopupWithForm from "./PopupWithForm";
import {useState,useContext,useEffect} from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";
export default function EditProfilePopup({isOpen,onClose,onUpdateUser}){
    const [name, setName] = useState("")
    const [description, setDescription] = useState("");
    const currentUser = useContext(CurrentUserContext);
    useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser]);
    function handleNameChange(e){
        setName(e.target.value)
    }
    function handleDescriptionChange(e){
        setDescription(e.target.value)
    }
    function handleSubmit(e){
        e.preventDefault();
        onUpdateUser(name, description);
        onClose();
    }

    return(
        <PopupWithForm name="edit" title="Редактировать профиль" isOpen={isOpen}
                       onClose={onClose} onSubmit={handleSubmit}>
            <input required
                   minLength="2"
                   value={name || ""}
                   onChange={handleNameChange}
                   maxLength="40"
                   type="text"
                   name="profile-name"
                   placeholder="Имя"
                   id="profile-name"
                   className="popup__input popup__input_type_name popup__input_profile-name"/>
            <span id="profile-name-error" className="popup__error"></span>
            <input required
                   minLength="2"
                   maxLength="200"
                   type="text"
                   name="profile-activity"
                   placeholder="Профессия"
                   id="profile-activity"
                   value={description || ""}
                   onChange={handleDescriptionChange}
                   className="popup__input popup__input_type_activity popup__input_profile-activity"/>
            <span id="profile-activity-error" className="popup__error"></span>
            <button type="submit" className="popup__save">Сохранить</button>
        </PopupWithForm>
    )
}