import style from "./style.module.scss";
import Bubbles from "../../components/bubbles";

export default function Home() {
  return (
    <>
      <div className={style.container}>
        <div className={style.title}>
          <h1>Lucas Cardoso</h1>
          <h1 className={style.animate}>Lucas Cardoso</h1>
        </div>
        <div className={style.teste}>odawodwadwad</div>
      </div>
      <Bubbles />

    </>
  );
}
