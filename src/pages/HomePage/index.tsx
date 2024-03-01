import style from "./style.module.scss"

export default function Home() {
  return (
    <>
      <div className={style.container}>
        <h1>Lucas Cardoso</h1>
        <h1 className={style.animate}>Lucas Cardoso</h1>
      </div>
    </>
  );
}
