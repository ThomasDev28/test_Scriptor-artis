import React from "react";
import Card from "./Card";
import styles from "../styles/MenuPrincipal.module.css";

export default function MenuPrincipal({ allData }) {
  const rockette = allData.launchesPast;
  return (
    <main className={styles.menuPrincipal}>
      <nav>
        <h1>Space X</h1>
      </nav>

      <section className={styles.card__container}>
        {rockette.map((rock) => (
          <Card key={rock.id} {...rock} />
        ))}
      </section>
    </main>
  );
}
