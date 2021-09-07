import Image from "next/image";
import style from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={style.container}>
      <Image
        src="/assets/footer_logo.svg"
        alt="pospelov"
        width={190}
        height={100}
      />
    </footer>
  );
};