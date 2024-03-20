import { useEffect, useState } from "react";
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

  function handleClickCard(sk: string) {
    if (isAnimating) return;
    setIsAnimating(true);

    if (openCard === sk) {
      setOpenCard(null);
      setLastOpenedCard(sk);

      console.log("2 FDS");
      setTimeout(() => setIsAnimating(false), 2000);
    } else {
      if (openCard) {
        setLastOpenedCard(openCard);
        setOpenCard(null);

        console.log("3 AGORA FALTA O TEMPO");
        setTimeout(() => {
          setOpenCard(sk);

          console.log("3.5 EXECUTO CARALHO IOWIAOD A");
          setTimeout(() => setIsAnimating(false), 2000);
        }, 2000);
      } else {
        setOpenCard(sk);

        console.log("4 PADRAO");
        setTimeout(() => setIsAnimating(false), 2000);
      }
    }
  }

  useEffect(() => console.log(isAnimating), [isAnimating]);
  return (
    <div className={style.container}>
      {skills.map((sk) => (
        <div
          key={sk.name}
          className={`${style.card} ${
            openCard === sk.name
              ? style.openCard
              : lastOpenedCard === sk.name
              ? style.closeCard
              : ""
          }`}
          style={{ border: `2px ${sk.color} solid` }}
          onClick={() => handleClickCard(sk.name)}>
          <h3>{sk.name}</h3>
          <img src={sk.icon} alt={`Icone de ${sk.name}`} />
        </div>
      ))}
    </div>
  );
}
