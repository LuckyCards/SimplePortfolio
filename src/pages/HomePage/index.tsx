import {
  InstagramLogo,
  PinterestLogo,
  TwitterLogo,
  YoutubeLogo,
} from "@phosphor-icons/react";
import style from "./style.module.scss";
import presentationVideo from "../../../public/background.mp4";
import MenuHeader from "../../components/MenuHeader/index.js";

export default function Home() {

  return (
    <section className={style.container}>
      <div className={style.presentation} >
        <div className={style.social}>
          <a href="" target="_blank">
            <TwitterLogo className={style.socialIcons} />
          </a>
          <a href="" target="_blank">
            <InstagramLogo className={style.socialIcons} />
          </a>
          <a href="" target="_blank">
            <YoutubeLogo className={style.socialIcons} />
          </a>
          <a href="" target="_blank">
            <PinterestLogo className={style.socialIcons} />
          </a>
        </div>
        <video
          autoPlay
          muted
          loop
          src={presentationVideo}
          className={style.presentationVideo}
        />
        <div className={style.boxTitle}>
          <h1 className={style.title}>Diving</h1>
          <h2 className={style.subtitle}>Mergulhe profundo, explore o mundo</h2>
        </div>
      </div>
      <MenuHeader />
      <main className={style.main}>
        <div className={style.about}>Sobre</div>
        <div className={style.services}>Serviços</div>
        <div className={style.galery}>Galeria</div>
        <div className={style.news}>Noticias</div>
        <div className={style.contact}>Contato</div>
      </main>
    </section>
  );
}
