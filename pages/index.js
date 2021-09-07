import { Head } from "../sections/Head";
import styles from "../styles/Home.module.css";
import { Footer } from "../sections/Footer";
import { AppBar } from "../sections/AppBar";
import { Hero } from "../sections/Hero";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head />
      <AppBar />
      <main className={styles.main}>
        <Hero />
        <div style={{ marginTop: 0, marginBottom: "auto" }}></div>
      </main>

      <Footer />
    </div>
  );
}
