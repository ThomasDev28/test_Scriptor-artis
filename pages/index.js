import styles from "../styles/Home.module.css";
import Head from "next/head";
import MenuPrincipal from "../components/MenuPrincipal";
import { getAll } from "../launch.service";

export default function Home({ allData }) {
  return (
    <main className={styles.main}>
      <Head>
        <title>Space X - Menu</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <MenuPrincipal allData={allData} />
    </main>
  );
}

export async function getStaticProps() {
  const data = await getAll();
  const allData = data;

  return {
    props: {
      allData,
    },
  };
}
