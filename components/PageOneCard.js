import React, { useState, useEffect } from "react";
import Head from "next/head";
import Carousel from "react-material-ui-carousel";
import styles from "../styles/PageCard.module.css";
import Image from "next/image";
import SvgIcon from "@material-ui/core/SvgIcon";
import { makeStyles } from "@material-ui/core/styles";
import { useRouter } from "next/router";

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

const useStyles = makeStyles((theme) => ({
  back_accueil: {
    fontSize: 50,
    padding: "10px",
    background: "rgb(2, 214, 150)",
    borderRadius: "50%",
    border: "2px solid #fff",
    color: "#fff",
    marginTop: 3 + "rem",
    "&:hover": {
      background: "#fff",
      border: "2px solid rgb(2, 214, 150)",
      color: "#000",
      transition: ".5s",
      cursor: "pointer",
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 80,
    },
  },
}));

export default function PageSolo({ dataOneCard }) {
  const classes = useStyles();
  const [image, setImage] = useState([]);

  const info = dataOneCard.launch;

  const imgDecollage = [
    {
      id: 1,
      image: "/images/image1.jpg",
    },
    {
      id: 2,
      image: "/images/image2.jpg",
    },
    {
      id: 3,
      image: "/images/image3.jpg",
    },
    {
      id: 4,
      image: "/images/image4.jpg",
    },
    {
      id: 5,
      image: "/images/image5.jpg",
    },
  ];

  useEffect(() => {
    setImage(info.links.flickr_images);
  }, []);

  const router = useRouter();
  
// ajout d'un window.scroll au cas où le détails serait trop long et qu'il y est un scroll et que le scroll reste au même endroit quand je navigue
  const backPagePrincipal = () => {
    window.scroll(0, 0)
    router.push("/");
  };

  return (
    <>
    <Head>
    <title>Space X - {info.mission_name}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          href="https://fonts.googleapis.com/css2?family=Otomanopee+One&display=swap"
          rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet" /> 
      </Head>
    <div className={styles.page}>
      <div className={styles.section__caroussel}>
        <Carousel
          next={() => {
            image.length != 0 ? image.length++ : imgDecollage.length++;
          }}
          autoPlay={true}
          interval={6000}
          animation={"fade"}
          timeout={600}
          className={styles.carousel__container}
          navButtonsAlwaysInvisible="true"
          indicatorContainerProps={{
            style: {
              width: "100%",
              position: "absolute",
              textAlign: "center",
              bottom: "20px",
            },
          }}
          indicatorIconButtonProps={{
            style: {
              padding: "5px",
              color: "rgb(0, 240, 168)",
            },
          }}
          activeIndicatorIconButtonProps={{
            style: {
              color: "#fff",
            },
          }}
        >
          {image.length != 0
            ? image.map((item, i) => (
                <Image
                  key={i}
                  src={item}
                  alt="image"
                  className={styles.img}
                  layout="fill"
                />
              ))
            : imgDecollage.map((item, i) => {
                console.log(item.image);
                return (
                  <Image
                    key={i}
                    src={item.image}
                    alt="image"
                    className={styles.img}
                    layout="fill"
                  />
                );
              })}
        </Carousel>
      </div>
      <div className={styles.info}>
        <h1 style={{fontFamily: "'Otomanopee One', sans-serif"}}>{info.rocket.rocket_name}</h1>
        <h2>{info.launch_date_local}</h2>
        <p id="sucess" style={{fontFamily: "'Lobster', cursive", fontSize: "35px"}}>
          Succes: {info.rocket.first_stage.cores[0].land_success ? "✅" : "❌"}
        </p>
        <h3>Details:</h3>
        <div className={styles.details}>
          <p>
            {info.details
              ? info.details
              : "There is not details for this mission..."}
          </p>
        </div>
        <HomeIcon className={classes.back_accueil} onClick={backPagePrincipal} />
      </div>
    </div>
    </>
  );
}
