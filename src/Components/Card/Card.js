import s from "./Card.module.css";

export function Card({
  dataBase,
  setCards,
  cards,
  setValueForSelect,
  setChoosedCard,
  choosedCard,
}) {
  //   const deleteCard = (item, event) => {
  //     if (event.keyCode === 46) {
  //       const deletedItem = cards.filter((elem) => elem !== item);
  //       setCards(deletedItem);
  //     }
  //   };
  //   const handleKeyDown = (item, event) => {
  //     if (event.key === "Delete") {
  //       console.log("User pressed: ", item);
  //     }
  //   };

  return (
    <div className={s.container}>
      <div className={s.grid}>
        {dataBase.map((item) => {
          return (
            <div
              tabIndex={0}
              onClick={() => setChoosedCard(item)}
              //   onKeyDown={(item) => handleKeyDown(item, event)}
              className={
                choosedCard.title === item.title
                  ? `${s.item} ${s.choosed}`
                  : `${s.item}`
              }
              key={item.title}
            >
              <img src={item.img} />
              <button
                onClick={(event) => {
                  return (
                    setValueForSelect(event.target.textContent),
                    event.stopPropagation()
                  );
                }}
                className={s.btn}
              >
                {item.category}
              </button>
              <p className={s.title}>{item.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
