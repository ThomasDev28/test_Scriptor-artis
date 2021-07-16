import React from "react";
import Image from "next/image";
import space from "../public/space-x.png";
import Card from "./Card";
import styles from "../styles/MenuPrincipal.module.css";
import { useQuery, gql } from "@apollo/client";
import CardRocket from "./Card";

const QUERY = gql`
query Rocket {
  launchesPast(limit: 10) {
    id
    launch_date_local
    links {
      flickr_images
    }
    rocket {
      rocket_name
      first_stage {
        cores {
          land_success
        }
      }
    }
    details
  }
}
`;

export default function MenuPrincipal({allData}) {
  const { loading, error } = useQuery(QUERY);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    console.error(error);
    return null;
  }
  

  const rockette = allData.launchesPast;
  return (
    <main className={styles.menuPrincipal}>
      <nav>

     <h1>Space X</h1>
      </nav>

      <section className={styles.card__container}>
        {rockette.map((rock) => (
          <CardRocket key={rock.id} {...rock} />
        ))}
      </section>
    </main>
  );
}
