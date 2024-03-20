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
  const cardRefs = useRef<{ [key: string]: React.RefObject<HTMLDivElement> }>(
    {}
  );
  const [cardOpen, setCardOpen] = useState<string>("");
  const [animationTransition, setAnimationTransition] =
    useState<boolean>(false);

  useEffect(() => {
    skills.forEach((skills: skillsType) => {
      cardRefs.current[skills.name] = React.createRef();
    });
    console.log(cardRefs);
  }, [skills]);

  function HandleClickCard(sk: any) {
    console.log("condição 0");
    cardRefs.current[sk].current?.classList.add(style.cardOpen);
    if (cardOpen == "") {
      console.log("condição 1");
    }
  }

  return (
    <div className={style.container}>
      {skills.map((sk) => (
        <div
          key={sk.name}
          ref={cardRefs.current[sk.name]}
          className={style.card}
          style={{ border: `2px ${sk.color} solid` }}
          onClick={() => HandleClickCard(sk.name)}>
          <h3>{sk.name}</h3>
          <img src={sk.icon} alt={`Icone de ${sk.name}`} />
        </div>
      ))}
    </div>
  );
}
