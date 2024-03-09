import style from "./style.module.scss";

export default function AboutPage() {
  return (
    <>
      <main className={style.container}>
        <div className={style.about}>
          <h3>Quem Somos?</h3>
          <p>
            O Instituto Marítimo é uma instituição dedicada à paixão pelo mundo
            subaquático. Nossos objetivos são:
          </p>
          <p>
            Instruir Jovens Mergulhadores: Compartilhamos conhecimento e
            habilidades com jovens entusiastas, capacitando-os a explorar as
            profundezas dos oceanos com segurança e confiança.
          </p>
        </div>
        <div className={style.feedback}></div>
      </main>
    </>
  );
}
