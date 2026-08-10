export default function EditAvatar() {
  return (
    <form className="popup__form" name="avatar-form" noValidate>
      <input
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
