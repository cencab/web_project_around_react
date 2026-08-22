import { useRef, useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

export default function EditAvatar() {
  const { handleUpdateAvatar } = useContext(CurrentUserContext);

  const avatarRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    handleUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  };

  return (
    <form
      className="popup__form"
      name="avatar-form"
      noValidate
      onSubmit={handleSubmit}
    >
      <input
        ref={avatarRef}
        className="popup__input"
        id="avatar-url"
        name="avatar"
        placeholder="Enlace a la imagen de perfil"
        type="url"
        required
      />
      <span className="popup__error avatar-error"></span>
      <button className="button popup__button" type="submit">
        Guardar
      </button>
    </form>
  );
}
