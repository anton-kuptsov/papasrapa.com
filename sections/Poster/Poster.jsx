import Image from "next/image";
import style from "./Poster.module.css";

export const Poster = ({ lang = "en" }) => {
  const text =
    lang === "ru"
      ? "Автор официального постера фильма:"
      : "Official poster of movie by";
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <Image
          src="/assets/poster.jpg"
          width={350}
          height={495}
          alt="PapaSrapa movie poster"
        />
        <div className={style.text}>
          {text}
          <p>
            <a
              href="https://www.behance.net/AlekseyRico"
              title="Alex Ricochet"
              className={style.link}
            >
              {lang === "ru" && "Алекс Рикошет / "}Alex Ricochet
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
