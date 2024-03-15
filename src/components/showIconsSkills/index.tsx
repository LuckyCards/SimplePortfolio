import { useEffect, useState, useRef } from "react";
import style from "./style.module.scss";
import data from "../../../public/skills.json";

export default function () {
  const [skills, setSkills] = useState(data);
  const [activeCard, setActiveCard] = useState("REACT");

  useEffect(() => {
    setSkills(data);
    console.log(activeCard);
  }, [activeCard, data]);

  function HandleClickCard(skill: string) {
    console.log("voce clicou no:", skill);
    if (activeCard === skill) {
      setActiveCard("");
    } else {
      setActiveCard(skill);
    }
  }

  return (
    <div className={style.container}>
      {skills.map((sk) => (
        <div
          className={`${style.card} ${
            sk.name === activeCard ? style.activeCard : ""
          }`}
          style={{
            background: `linear-gradient(to right, ${sk.color}, #000000 350%`,
          }}
          key={sk.name}
          onClick={() => HandleClickCard(sk.name)}>
          <h3>{sk.name}</h3>
          <img src={sk.icon} alt={`Icone de ${sk.name}`} />
          <p>{sk.description}</p>
        </div>
      ))}
    </div>
  );
}
