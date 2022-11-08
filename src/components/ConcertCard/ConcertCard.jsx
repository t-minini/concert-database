import axios from "axios";
import * as React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import style from "./ConcertCard.module.css";

// MATERIAL UI COMPONENTS
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";


export function ConcertCard() {
  const [concerts, setConcerts] = useState([]);
  console.log(concerts);

  useEffect(() => {
    async function fetchConcerts() {
      try {
        const response = await axios.get(
          "https://ironrest.herokuapp.com/project-two-tulio-lucas"
        );
        console.log(response);
        setConcerts(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchConcerts();
  }, []);

  return (
    <section className={style.cardsContainer}>
      {concerts.map((currentConcert) => {
        return (
          <Card sx={{ minWidth: 275 }} className={style.mainCard}>
            <CardContent>
              <Typography
                color="text.secondary"
                gutterBottom
                className={style.tourText}
              >
                {currentConcert.concert}

              </Typography>
              <Typography
                color="text.secondary"
                className={style.artistText}
              >
                {currentConcert.artist}
              </Typography>
              <Rating
                  sx={{ fontSize: 17 }}
                  name="read-only"
                  value={Number(currentConcert.rating) || ""}
                  readOnly
                />
                <Typography
                  color="text.secondary"
                  className={style.cardOwner}
                >
                  {currentConcert.owner}
                </Typography>
                <Typography
                  color="text.secondary"
                  className={style.cardDateCountry}
                >
                  {currentConcert.date} <br />
                  {currentConcert.city}, {currentConcert.country}
                </Typography>
              <Link
                className={style.editBtnLink}
                to={`/edit/${currentConcert._id}`}
                style={{ textDecoration: "none" }}
              >
                <Button
                  size="small"
                  variant="contained"
                  style={{ backgroundColor: "rgb(66, 66, 66)" }}
                >
                  EDIT
                </Button>
              </Link>
            </CardContent>
          </Card>
        );
      })}
    </section>
  );
}
