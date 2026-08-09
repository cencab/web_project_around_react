import React from "react";

export default function EditProfile() {
  return (
    <form
      className="popup__form"
      id="edit-profile-form"
      name="edit-profile-form"
      noValidate
    >
      <input
        className="popup__input popup__input_type_name"
        name="name"
        placeholder="Nombre"
        type="text"
        required
        minLength="2"
        maxLength="40"
      />
      <span className="popup__error name-error"></span>
      <input
        className="popup__input popup__input_type_description"
        name="description"
        placeholder="Acerca de mí"
        type="text"
        required
        minLength="2"
        maxLength="200"
      />
      <span className="popup__error description-error"></span>
      <button className="button popup__button" type="submit">
        Guardar
      </button>
    </form>
  );
}
