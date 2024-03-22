import ShowIconsSkills from "../../components/showCardsSkills";
import style from "./style.module.scss";

export default function SkillsPage() {
  return (
    <>
      <main className={style.container}>
        <span>Conhecimentos em:</span>
        <div className={style.skills}>
          <ShowIconsSkills />
        </div>
      </main>
    </>
  );
}
