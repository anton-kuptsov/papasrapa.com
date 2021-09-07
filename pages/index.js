import { Head } from "../sections/Head/Head";
import styles from "../styles/Home.module.css";
import { Footer } from "../sections/Footer";
import { AppBar } from "../sections/AppBar/AppBar";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head />
      <AppBar />
      <main className={styles.main}></main>

      <Footer />
    </div>
  );
}
