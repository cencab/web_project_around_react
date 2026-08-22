import { useState, useContext, useEffect } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

export default function EditProfile() {
  const { currentUser, handleUpdateUser } = useContext(CurrentUserContext);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    setName(currentUser.name || "");
    setDescription(currentUser.about || "");
  }, [currentUser]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    handleUpdateUser({
      name,
      about: description,
    });
  };

  return (
    <form
      className="popup__form"
      id="edit-profile-form"
      name="edit-profile-form"
      noValidate
      onSubmit={handleSubmit}
    >
      <input
        className="popup__input popup__input_type_name"
        name="name"
        placeholder="Nombre"
        type="text"
        required
        minLength="2"
        maxLength="40"
        value={name}
        onChange={handleNameChange}
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
        value={description}
        onChange={handleDescriptionChange}
      />
      <span className="popup__error description-error"></span>
      <button className="button popup__button" type="submit">
        Guardar
      </button>
    </form>
  );
}
