import style from "./AppBar.module.css";
import Image from "next/image";

const AppBar = () => {
  return (
    <header className={style.container}>
      <div className={style.wrapper}>
        <div className={style.logo}>
          <Image
            src="/assets/logo.svg"
            alt="PapaSrapa"
            width="200px"
            height="44px"
          />
        </div>
        <div className={style.title}>
          Documentary movie by
          <br />
          Konstantin Ivanov and Nikita Kabardin
        </div>
        <div className={style.social}>
          <a href="https://www.instagram.com/papa_srapa/" rel="noopener">
            <Image
              src="/assets/instagram-white.svg"
              alt="Instagram"
              width={32}
              height={32}
            />
          </a>
          <a href="https://t.me/papasrapa" rel="noopener">
            <Image
              src="/assets/telegram-white.svg"
              alt="Telegram"
              width={32}
              height={32}
            />
          </a>
        </div>
      </div>
    </header>
  );
};

export default AppBar;
