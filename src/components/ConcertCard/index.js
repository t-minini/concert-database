import * as React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import DeleteIcon from "@mui/icons-material/Delete";

// const navigate = useNavigate();

export function ConcertCard() {
  const [concerts, setConcerts] = useState([{}]);
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

  //   import { useParams } from "react-router-dom";
  //   const { _id } = useParams();

  //   async function handleDelete() {
  //     try {
  //       const response = await axios.delete(
  //         `https://ironrest.herokuapp.com/project-two-tulio-lucas/${_id}`
  //       );
  //       //   console.log(response);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          REVIEW
        </Typography>
        <Typography variant="h5" component="div">
          CONCERT/TOUR
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          ATTENDEE
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          ARTIST
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          DATE
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          COUNTRY
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          CITY
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={"/edit"} style={{ textDecoration: "none" }}>
          <Button size="medium" variant="outlined">
            EDIT
          </Button>
        </Link>
        <Button
          size="medium"
          variant="outlined"
          color="error"
          startIcon={<DeleteIcon />}
          //   onClick={console.log("FUNCIONAAA!")}
        >
          DELETE
        </Button>
      </CardActions>
    </Card>
  );
}
