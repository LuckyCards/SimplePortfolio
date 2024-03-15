import { useEffect, useState } from "react";
import "./style.scss";

type shuffleType = {
  texts: String[]
}
export default function TextShuffle({ texts }: shuffleType) {

  const getRandom = (n: number) => {
    return Number((Math.random() * n).toFixed(3)) - 1 || 0
  }

  const [startTime, setStartTime] = useState((new Date()).getTime() / 1000);

  const chars = '!<>-_\/[]{}—=+*^?#_';
  const [actualTextIndex, setActualTextIndex] = useState(1)
  const [actualText, setActualText] = useState<string[]>([])
  const [nextText, setNextText] = useState<any>(texts[actualTextIndex].split('').map(char => {
    const rand = getRandom(9)
    return { char, time: rand + 1.5, fadeTime: rand }
  }))

  function setText(char: string, index: number) {
    setActualText(text => {
      text[index] = char;
      return text;
    })
  }


  /*useEffect(() => {
    const intervalId = setInterval(() => {

      setActualTextIndex(e => {
        console.log('change', e)
        if (e + 1 > texts.length - 1) {
          setNextText(texts[0].split('').map(char => {
            const rand = getRandom(9)
            return { char, time: rand + 1.5, fadeTime: rand }
          }))
          setActualText(e => e.map(c => ''))
          return 0
        } else {
          setNextText(texts[e + 1].split('').map(char => {
            const rand = getRandom(9)
            return { char, time: rand + 1.5, fadeTime: rand }
          }))
          setActualText(e => e.map(c => ''))
          return e + 1
        }
      });
    }, 25000);
    return () => clearInterval(intervalId);
  }, []);*/

  useEffect(() => {
    const texto = actualText;
    while (texto.length < nextText.length) {
      texto.push('‎')
    }
    if (actualText.length != texto.length)
      setActualText(texto);
    const intervalId = setInterval(() => {
      const now = (new Date()).getTime() / 1000;
      nextText.forEach((text: any, index: number) => {
        if (now > text.time + startTime) {
          setText(text.char, index)
        } else if (now > text.fadeTime + startTime) {
          setText(chars[Number(getRandom(chars.length).toFixed(0))] || "-", index)
        }
      })
    }, 100);
    return () => clearInterval(intervalId);
  }, [nextText]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      let newText = [...actualText];
      actualText.forEach((text: string, index) => {
        if (chars.includes(text)) {
          newText[index] = chars[Number(getRandom(chars.length).toFixed(0))] || "-"
        }
      })
      setActualText(newText)
    }, 80);
    return () => clearInterval(intervalId);
  }, [actualText])

  return (
    <div className="text-scramble">
      {actualText}
    </div>
  )

}