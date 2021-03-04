import PopupWithForm from "./PopupWithForm";
import {useRef} from "react";
export default function EditAvatarPopup({isOpen,onClose,onUpdateAvatar}){
    const linkInput = useRef(null)
    function handleSubmit(e) {
        e.preventDefault();
        onUpdateAvatar(linkInput.current.value);
        onClose();
        linkInput.current.value = "";
    }
    return (
        <PopupWithForm name="edit-avatar" title="Обновить аватар" isOpen={isOpen}
                       onClose={onClose} onSubmit={handleSubmit}>
            <input required type="url" name="link" placeholder="Ссылка на аватар" id="avatar-link" ref={linkInput}
                   className="popup__input" />
            <span id="avatar-link-error" className="popup__error"></span>
            <button type="submit" className="popup__save">Сохранить</button>
        </PopupWithForm>
    )
}