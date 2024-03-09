import { useEffect, useRef, useState } from "react";

import style from "./style.module.scss";
import MenuHeader from "../../components/MenuHeader/index.js";
import AboutPage from "../AboutPage";
import Presentation from "./presentation.tsx";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [scrollCount, setScrollCount] = useState(0);
  const [PresentationView, setPresentationView] = useState(
    style.showPresentation
  );
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function HandleScroll(event: WheelEvent) {
      const currentScrollY = sectionRef.current?.scrollTop || 0;
      setScrollY(currentScrollY);
      if (currentScrollY === 0 && event.deltaY < 0) {
        setScrollCount((prevCount) => prevCount + 1);
      }
      if (event.deltaY > 0 && scrollCount >= 5) {
        setScrollCount(0);
      }
    }

    sectionRef.current?.addEventListener("wheel", HandleScroll);

    return () => {
      sectionRef.current?.removeEventListener("wheel", HandleScroll);
    };
  }, [scrollCount]);

  useEffect(() => {
    if (scrollCount >= 5) {
      setPresentationView(style.showPresentationView);
      if (scrollY > 0) {
        setScrollCount(0);
      }
    } else {
      setPresentationView(style.hiddenPresentationView);
    }
  }, [scrollY, scrollCount]);

  return (
    <div className={PresentationView}>
      <section ref={sectionRef} className={style.container}>
        <div className={style.presentation}>
          <Presentation />
        </div>

        <MenuHeader />
        <main className={style.main}>
          <AboutPage />
          <div className={style.about}>Sobre</div>
          <div className={style.services}>Serviços</div>
          <div className={style.galery}>Galeria</div>
          <div className={style.news}>Noticias</div>
          <div className={style.contact}>Contato</div>
        </main>
      </section>
    </div>
  );
}
