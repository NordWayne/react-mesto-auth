export default function PopupWithForm(props){
    return(
        <div className={ props.isOpen ? `popup_opened popup popup_${props.name}` :`popup popup_${props.name}`} >
            <div className="popup__content">
                <button type="button" onClick={props.onClose} className={`popup__close popup__close_${props.name}`}></button>
                <h3 className="popup__title">{props.title}</h3>
                <form name={props.name} className={`popup__form popup__form_${props.name}`} onSubmit={props.onSubmit}>
                {props.children}
                </form>
            </div>
        </div>
    )
}