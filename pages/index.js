import { Head } from "../sections/Head";
import styles from "../styles/Home.module.css";
// import { Footer } from "../sections/Footer";

import { AppBar } from "../sections/AppBar";
import { Hero } from "../sections/Hero";
import { Gallery } from "../sections/ru/Gallery";
import { Credits } from "../sections/Credits";
import { Poster } from "../sections/Poster";
import { Footer } from "../sections/ru/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head />
      <AppBar />
      <main className={styles.main}>
        <Hero />
        <Gallery />
        <Credits />
        <Poster />
      </main>

      <Footer />
    </div>
  );
}
