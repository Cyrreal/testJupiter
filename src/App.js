import s from "./App.module.css";
import { data } from "./Data.js";
import { Header } from "./Components/Header";
import { Card } from "./Components/Card";
import { useEffect, useState, useCallback } from "react";
import { Categories } from "./Components/Categories";
import { Button } from "./Components/Button/Button";

function App() {
  const [cards, setCards] = useState(data);

  const [valueForSelect, setValueForSelect] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(9);
  const [choosedCard, setChoosedCard] = useState([]);

  const filteredData = cards.filter((item) => {
    return item.category.toLowerCase().includes(valueForSelect.toLowerCase());
  });

  const lastPageIndex = currentPage * cardsPerPage;
  const firstPageIndex = lastPageIndex - cardsPerPage;
  const cardsOnPage = filteredData.slice(firstPageIndex, lastPageIndex);

  const handleKeyPress = useCallback(
    (event) => {
      if (event.key === "Delete") {
        const deletedItem = cards.filter((elem) => elem !== choosedCard);
        setCards(deletedItem);
      }
    },
    [choosedCard]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <div className={s.container}>
      <Header />
      <Categories
        cards={cards}
        setCardsPerPage={setCardsPerPage}
        setValueForSelect={setValueForSelect}
      />
      <Card
        cards={cards}
        setChoosedCard={setChoosedCard}
        choosedCard={choosedCard}
        setCards={setCards}
        dataBase={cardsOnPage}
        setValueForSelect={setValueForSelect}
      />
      <Button
        cardsOnPage={cardsOnPage}
        cards={cards}
        setCardsPerPage={setCardsPerPage}
        cardsPerPage={cardsPerPage}
      />
    </div>
  );
}

export default App;
