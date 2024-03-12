import style from "./style.module.scss";
import presentationVideo from "../../../public/background.mp4";
import {
  InstagramLogo,
  PinterestLogo,
  TwitterLogo,
  YoutubeLogo,
} from "@phosphor-icons/react";
import TextScrambler from "../../utils/textScrambler";

export default function Presentation() {
  return (
    <div className={style.presentationView}>
      <div className={style.boxTitle}>
        <h1 className={style.title}>
          <TextScrambler />
        </h1>
        <h2 className={style.subtitle}>Desenvolvedor Front-End</h2>
      </div>
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
    </div>
  );
}
