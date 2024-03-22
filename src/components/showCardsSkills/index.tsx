import { useEffect, useRef, useState } from "react";
import style from "./style.module.scss";
import data from "../../../public/skills.json";

type skillsType = {
  name: string;
  type: string;
  description: string;
  icon: string;
  color: string;
};

export default function () {
  const [skills, _] = useState<skillsType[]>(data);
  const [openCard, setOpenCard] = useState<string | null>(null);
  const [lastOpenedCard, setLastOpenedCard] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [cardsPos, setCardsPos] = useState<number[]>([]);
  const [cardInfoPos, setCardInfoPos] = useState<number | null>(null);
  const cardRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    setCardsPos(
      skills.map(
        (_, i) => cardRef.current[i]?.getBoundingClientRect().left || 0
      )
    );
  }, []);

  function handleClickCard(sk: string, posX: number) {
    console.log(posX);
    if (isAnimating) return;
    setIsAnimating(true);

    if (openCard === sk) {
      setOpenCard(null)
      setCardInfoPos(posX);
      setLastOpenedCard(sk);
      setTimeout(() => {
        setIsAnimating(false);
      }, 1000);
    } else {
      if (openCard) {
        setLastOpenedCard(openCard);
        setOpenCard(null);

        setTimeout(() => {
          setOpenCard(sk);

          setCardInfoPos(posX);
          setTimeout(() => {
            setIsAnimating(false);
          }, 1000);
        }, 1000);
      } else {
        setOpenCard(sk);

        setCardInfoPos(posX);
        setTimeout(() => {
          setIsAnimating(false);
        }, 1000);
      }
    }
  }

  return (
    <div className={style.container}>
      <nav className={style.cardButton}>
        {skills.map((sk, i) => (
          <div
            ref={(el) => (cardRef.current[i] = el) || null}
            key={sk.name}
            className={`${style.card} ${
              openCard === sk.name
                ? style.openCard
                : lastOpenedCard === sk.name
                ? style.closeCard
                : ""
            }`}
            style={{ border: `2px ${sk.color} solid` }}
            onClick={() => handleClickCard(sk.name, cardsPos[i])}>
            <h3>{sk.name}</h3>
            <img src={sk.icon} alt={`Icone de ${sk.name}`} />
          </div>
        ))}
      </nav>

      <div
        className={`${style.cardInfo} ${
          openCard != null ? style.openCardInfo : style.closeCardInfo
        }`}
        style={{ left: `calc(${cardInfoPos}px - 40px)` }}></div>
    </div>
  );
}
