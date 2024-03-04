import style from "./style.module.scss";

export default function MenuHeader() {
  return (
    <nav className={style.container}>
      <button>Inicio</button>
      <button>Sobre</button>
      <button>Serviços</button>
      <button>Galeria</button>
      <button>Noticias</button>
      <button>Contato</button>
    </nav>
  );
}
