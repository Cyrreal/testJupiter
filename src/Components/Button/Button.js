import s from "./Button.module.css";
export function Button({ cardsOnPage, setCardsPerPage, cards }) {
  const itemCounter = cardsOnPage.length;
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        {itemCounter < 9 || itemCounter == 18 ? (
          <button className={s.inactive}></button>
        ) : (
          <button
            className={s.btn}
            onClick={() => {
              setCardsPerPage(cards.length);
            }}
          >
            LOAD MORE
          </button>
        )}
      </div>
    </div>
  );
}
