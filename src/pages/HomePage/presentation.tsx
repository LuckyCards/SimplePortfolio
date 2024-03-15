import style from "./style.module.scss";
import presentationVideo from "../../../public/background.mp4";
import {
  InstagramLogo,
  LinkedinLogo,
  GithubLogo,
  WhatsappLogo,
} from "@phosphor-icons/react";

export default function Presentation() {
  return (
    <div className={style.presentationView}>
      <div className={style.boxTitle}>
        <h1 className={style.title}>Lucas Cardoso
        </h1>
        <h2 className={style.subtitle}>Desenvolvedor Front-End</h2>
      </div>
      <div className={style.social}>
        <a href="" target="_blank">
          <GithubLogo className={style.socialIcons} />
        </a>
        <a href="" target="_blank">
          <InstagramLogo className={style.socialIcons} />
        </a>
        <a href="" target="_blank">
          <WhatsappLogo weight="light" className={style.socialIcons} />
        </a>
        <a href="" target="_blank">
          <LinkedinLogo className={style.socialIcons} />
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
