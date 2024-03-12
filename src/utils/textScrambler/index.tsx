import { useEffect, useState } from "react";
import TextScramble from "./TextScrambler";

const phrases = ["OLA MUNDO,", "EU NAO SEI FUNFAR ISSO"];

export default function Scrambler() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 800);
    return () => clearInterval(intervalId);
  }, []);

  return <TextScramble text={phrases[index]} />;
}
