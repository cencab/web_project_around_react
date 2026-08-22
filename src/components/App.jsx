import { useState, useEffect } from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import api from "../utils/api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [popup, setPopup] = useState(null);

  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getUserInfo()
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((error) => console.error("Error al cargar perfil:", error));

    api
      .getCardList()
      .then((data) => {
        setCards(data);
      })
      .catch((error) => console.error("Error al cargar tarjetas:", error));
  }, []);

  function handleOpenPopup(popupConfig) {
    setPopup(popupConfig);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  const handleUpdateUser = (data) => {
    api
      .setUserInfo(data)
      .then((newData) => {
        setCurrentUser(newData);
        handleClosePopup();
      })
      .catch((error) => console.error(error));
  };

  const handleUpdateAvatar = (data) => {
    api
      .setUserAvatar(data)
      .then((newData) => {
        setCurrentUser(newData);
        handleClosePopup();
      })
      .catch((error) => console.error(error));
  };

  async function handleCardLike(card) {
    const isLiked =
      card.isLiked !== undefined
        ? card.isLiked
        : card.likes?.some((i) => i._id === currentUser?._id);

    await api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        const updatedCard = newCard.data ? newCard.data : newCard;
        setCards((state) =>
          state.map((currentCard) =>
            currentCard._id === card._id ? updatedCard : currentCard,
          ),
        );
      })
      .catch((error) => console.error(error));
  }

  async function handleCardDelete(card) {
    await api
      .deleteCard(card._id)
      .then(() => {
        setCards((state) =>
          state.filter((currentCard) => currentCard._id !== card._id),
        );
      })
      .catch((error) => console.error(error));
  }

  const handleAddPlaceSubmit = (cardData) => {
    api
      .addCard(cardData)
      .then((newCard) => {
        const addedCard = newCard.data ? newCard.data : newCard;
        setCards([addedCard, ...cards]);
        handleClosePopup();
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="page__content">
      <CurrentUserContext.Provider
        value={{ currentUser, handleUpdateUser, handleUpdateAvatar }}
      >
        <Header />
        <Main
          popup={popup}
          onOpenPopup={handleOpenPopup}
          onClosePopup={handleClosePopup}
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
          onAddPlace={handleAddPlaceSubmit}
        />
        <Footer />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
