import React, { useEffect, useRef, useState } from "react";
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

  function handleClickCard(sk: string) {
    if (openCard === sk) {
      setOpenCard(null);
      setLastOpenedCard(sk);
    } else {
      setOpenCard(sk);
      if (openCard) {
        setLastOpenedCard(openCard);
      }
    }
  }

  return (
    <div className={style.container}>
      {skills.map((sk) => (
        <div
          key={sk.name}
          className={`${style.card} ${ openCard === sk.name ? style.openCard : lastOpenedCard === sk.name ? style.closeCard : ""}`}
          style={{ border: `2px ${sk.color} solid` }}
          onClick={() => handleClickCard(sk.name)}>
          <h3>{sk.name}</h3>
          <img src={sk.icon} alt={`Icone de ${sk.name}`} />
        </div>
      ))}
    </div>
  );
}
