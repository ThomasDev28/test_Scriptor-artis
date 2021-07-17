/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";
import { useRouter } from "next/router";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../styles/Card.module.css";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  btn: {
    color: "#fff",
    background: "rgb(2, 214, 150)",
    position: "absolute",
    bottom: "5%",
    "&:hover": {
      background: "#000",
      color: "#fff",
    },
  },
  carte_img: {
    height: "40%",
    maxWidth:"100%",
    [theme.breakpoints.up("md")]: {
      height: "46%",
    },
    [theme.breakpoints.up("lg")]: {
      height: "50%",
    },
  },
}));

export default function CardRocket({
  id,
  launch_date_local,
  details,
  flickr_images,
  links,
  rocket,
  rocket_name,
  land_sucess,
}) {
  const router = useRouter();

  const clikBtn = (e) => {
    e.preventDefault();
    router.push(`launch/${id}`);
  };

  const imgDecollage = [
    {
      id: 1,
      image: "../images/image1.jpg",
    },
    {
      id: 2,
      image: "../images/image2.jpg",
    },
    {
      id: 3,
      image: "../images/image3.jpg",
    },
    {
      id: 4,
      image: "../images/image4.jpg",
    },
    {
      id: 5,
      image: "../images/image5.jpg",
    },
  ];

  const classes = useStyles();

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Otomanopee+One&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lobster&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className={styles.card}>
        <Card
          style={{
            height: "100%",
            width: "100%",
            borderRadius: 20 + "px",
            position: "relative",
          }}
        >
          <CardMedia
            component="img"
            alt="name"
            className={classes.carte_img}
            image={
              links.flickr_images[0]
                ? links.flickr_images[
                    Math.floor(Math.random() * links.flickr_images.length)
                  ]
                : imgDecollage[Math.floor(Math.random() * imgDecollage.length)]
                    .image
            }
          />
          <CardContent>
            <Typography
              gutterbottom="true"
              variant="h5"
              component="h3"
              style={{
                display: "flex",
                justifyContent: "center",
                fontFamily: "'Otomanopee One', sans-serif",
              }}
            >
              {rocket.rocket_name}
            </Typography>
            <Typography
              gutterbottom="true"
              variant="h5"
              component="h4"
              style={{ fontSize: 20, padding: 12, textAlign: "center"}}
            >
              {launch_date_local}
            </Typography>
            <Typography
              gutterbottom="true"
              variant="h5"
              component="h4"
              style={{
                fontSize: 20,
                marginTop: "10px",
                fontFamily: "'Lobster', cursive",
              }}
            >
              Succes: {rocket.first_stage.cores[0].land_success ? "✅" : "❌"}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              // className={styles.details}
              style={{ fontSize: 15, marginTop: "1rem" }}
            >
              {details
                ? details.split(" ").slice(0, 10).join(" ") + "..."
                : "There is not details for this mission..."} 
            </Typography>
          </CardContent>
          <CardActions style={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="outlined"
              onClick={clikBtn}
              className={classes.btn}
            >
              Go Check
            </Button>
          </CardActions>
        </Card>
      </div>
    </>
  );
}
