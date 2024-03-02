import {
  InstagramLogo,
  PinterestLogo,
  TwitterLogo,
  YoutubeLogo,
} from "@phosphor-icons/react";
import style from "./style.module.scss";
import presentationVideo from "./background.mp4";

export default function Home() {
  return (
    <>
      <div className={style.container}>
        <div className={style.presentation}>
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

          <div className={style.boxTitle}>
            <h1 className={style.title}>Diving</h1>
            <h2 className={style.subtitle}>
              Mergulhe profundo, explore o mundo
            </h2>
          </div>

          <video autoPlay muted loop src={presentationVideo} />
        </div>
      </div>
    </>
  );
}
