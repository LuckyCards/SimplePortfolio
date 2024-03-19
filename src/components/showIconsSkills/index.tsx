import { useEffect, useState } from "react";
import style from "./style.module.scss";
import data from "../../../public/skills.json";

export default function () {
  const [skills, setSkills] = useState(data);
  const [openedCard, setOpenedCard] = useState("REACT");

  function HandleClickCard(skill: string) {
    if (openedCard === skill) {
      setOpenedCard("");
    } else {
      setOpenedCard(skill);
    }
  }

  return (
    <div className={style.container}>
      {skills.map((sk) => (
        <div
          className={`${style.card} ${
            sk.name === openedCard ? style.openCard : ""
          }`}
          style={{
            border: `2px ${sk.color} solid`
          }}
          key={sk.name}
          onClick={() => HandleClickCard(sk.name)}>
          <h3>{sk.name}</h3>
          <img src={sk.icon} alt={`Icone de ${sk.name}`} />
        </div>
      ))}
    </div>
  );
}
