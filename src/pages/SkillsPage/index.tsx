import ShowIconsSkills from "../../components/showIconsSkills";
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
