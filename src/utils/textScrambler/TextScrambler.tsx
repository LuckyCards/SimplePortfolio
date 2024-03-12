import { useEffect, useRef, useState } from "react";
import "./style.scss";

interface TextScrambler {
  text: string;
}

interface Transition {
  from: string;
  to: string;
  start: number;
  end: number;
  char: string;
}

export default function ({ text }: TextScrambler) {
  const elRef = useRef<HTMLDivElement | null>(null);
  const [queue, setQueue] = useState<Transition[]>([]);
  const [frame, setFrame] = useState(0);
  const [/*promise*/, setPromise] = useState<Promise<void> | null>(null);

  useEffect(() => {
    const oldText = elRef.current ? elRef.current.innerText : "";
    const length = Math.max(oldText.length, text.length);
    const newQueue: Transition[] = [];
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || "";
      const to = text[i] || "";
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      newQueue.push({ from, to, start, end, char: "" });
    }
    setQueue(newQueue);
    setFrame(0);
    const newPromise = new Promise<void>((resolve) => {
      function update() {
        let output = "";
        let complete = 0;
        for (let i = 0, n = queue.length; i < n; i++) {
          let { from, to, start, end, char } = queue[i];
          if (frame >= end) {
            complete++;
            output += to;
          } else if (frame >= start) {
            if (!char || Math.random() < 0.28) {
              char = String.fromCharCode(33 + Math.random() * 94);
              queue[i].char = char;
            }
            output += `<span class="dud">${char}</span>`;
          } else {
            output += from;
          }
        }
        if (elRef.current) {
          elRef.current.innerHTML = output;
        }
        if (complete === queue.length) {
          resolve();
        } else {
          requestAnimationFrame(update);
          setFrame(frame + 1);
        }
      }
      update();
    });
    setPromise(newPromise);
  }, [text]);

  useEffect(() => {
    if (elRef.current) {
      elRef.current.innerText = text;
    }
  }, []);

  return <div className="text-scramble" ref={elRef}></div>;
}
