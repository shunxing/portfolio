import Head from "next/head";
import Button from "@/components/Button/Button";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bobby UNG - Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Bobby UNG</h1>
        Plusieurs années d'expériences m'ont mené à ma position actuelle en tant
        que Ingénieur web spécialiste en React/JavaScript. Vous pouvez suivre
        mon parcours en tant que développeur depuis ma première ligne de code
        suivant les différentes rubriques de mon portfolio.
        <Button>Commencer</Button>
      </main>
    </div>
  );
}
