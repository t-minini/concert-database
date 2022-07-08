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
    <div className={style.cardsFlex}>
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        flexWrap="wrap"
        className={style.main}
      >
        {concerts.map((currentConcert) => {
          return (
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              key={currentConcert._id}
              className={style.cardGrid}
            >
              <Card sx={{ minWidth: 275 }} className={style.mainCard}>
                <CardContent className={style.cardContent}>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                    className={style.cardHeader}
                  >
                    {currentConcert.concert}
                    <Rating
                      sx={{ fontSize: 15 }}
                      name="read-only"
                      value={Number(currentConcert.rating) || ""}
                      readOnly
                      className={style.rating}
                    />
                  </Typography>

                  <Typography
                    sx={{ mb: 1.5 }}
                    color="text.secondary"
                    className={style.artist}
                  >
                    {currentConcert.artist}
                  </Typography>
                  <div>
                    <div className={style.cardInfo}>
                      <Typography
                        sx={{ mb: 1.5 }}
                        color="text.secondary"
                        className={style.cardInfoText}
                      >
                        {currentConcert.owner}
                      </Typography>
                    </div>
                    <div className={style.cardActions}>
                      <Typography
                        sx={{ mb: 1.5 }}
                        color="text.secondary"
                        className={style.cardActionsText}
                      >
                        {currentConcert.date} <br />
                        {currentConcert.country}, {currentConcert.city}
                      </Typography>
                    </div>
                    <div>
                      <Link
                        className={style.editBtnLink}
                        to={`/edit/${currentConcert._id}`}
                        style={{ textDecoration: "none" }}
                      >
                        <Button
                          size="small"
                          variant="contained"
                          className={style.editBtn}
                        >
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
