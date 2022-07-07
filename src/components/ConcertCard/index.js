import * as React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import style from "./ConcertCard.module.css";

// MATERIAL UI COMPONENTS
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { Grid } from "@mui/material";

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
    <div>
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        flexWrap="wrap"
        className={style.scroll}
      >
        {concerts.map((currentConcert) => {
          return (
            <Grid item xs={12} sm={6} key={currentConcert._id}>
              <Card
                sx={{ minWidth: 275 }}
                style={{ backgroundColor: "#D7D9D8" }}
                className={style.mainCard}
              >
                <CardContent className={style.cardContent}>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                    className={style.cardHeader}
                  >
                    {currentConcert.concert}
                    <Rating
                      name="read-only"
                      value={Number(currentConcert.rating) || ""}
                      readOnly
                    />
                  </Typography>

                  <Typography
                    sx={{ mb: 1.5 }}
                    color="text.secondary"
                    className={style.artist}
                  >
                    {currentConcert.artist}
                  </Typography>
                  <div className={style.cardInfo}>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      {currentConcert.owner}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      {currentConcert.date}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      {currentConcert.country}
                    </Typography>
                    <div className={style.cardActions}>
                      <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {currentConcert.city}
                      </Typography>
                      <Link
                        to={`/edit/${currentConcert._id}`}
                        style={{ textDecoration: "none" }}
                      >
                        <Button size="medium" variant="outlined">
                          EDIT
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Stack>
    </div>
  );
}
