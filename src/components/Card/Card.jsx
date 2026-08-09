import React from "react";
import ImagePopup from "../ImagePopup/ImagePopup";

export default function Card(props) {
  const { card, onCardClick } = props;
  const { name, link, isLiked } = card;

  const cardLikeButtonClassName = `card__like-button ${
    isLiked ? "card__like-button_active" : ""
  }`;

  const imagePopup = {
    title: null,
    children: <ImagePopup card={card} />,
  };

  return (
    <li className="card">
      <img
        className="card__image"
        src={link}
        alt={name}
        onClick={() => onCardClick(imagePopup)}
      />
      <button
        aria-label="Eliminar tarjeta"
        className="card__delete-button"
        type="button"
      />
      <div className="card__description">
        <h2 className="card__title">{name}</h2>
        <button
          aria-label="Dar me gusta"
          type="button"
          className={cardLikeButtonClassName}
        />
      </div>
    </li>
  );
}
