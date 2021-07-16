import React from "react";
import PageOneCard from "../../components/PageOneCard";
import styles from "../../styles/PageCard.module.css";
import { getAll, getById } from "../../launch.service";

export default function index({ dataOneCard }) {

  return (
    <div className={styles.page__solo}>
      {dataOneCard && <PageOneCard dataOneCard={dataOneCard} />}
    </div>
  );
}

export async function getStaticPaths() {
  const launch = await getAll();
  
  

  const paths = launch.launchesPast.map((launches) => ({
    params: { id: launches.id },
  }));
 

  return { paths, fallback: false };
  
}

export async function getStaticProps({ params }) {
  const rocket = await getById(params.id);
  

  const dataOneCard = rocket;

  return {
    props: {
      dataOneCard,
    },
  };
}
