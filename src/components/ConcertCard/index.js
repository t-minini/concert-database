import * as React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// const navigate = useNavigate();

// MATERIAL UI COMPONENTS
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";


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

  //HANDLEDELETE PARA SER USADO NA EDIT PAGE
  //   const { _id } = useParams();

  //   async function handleDelete() {
  //     try {
  //       const response = await axios.delete(
  //         `https://ironrest.herokuapp.com/project-two-tulio-lucas/${_id}`
  //       );
  //       console.log(response._id);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }

  return (
    <>
      <div key={concerts.id}>
        {concerts.map((currentConcert) => {
          return (
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  {currentConcert.rating}
                </Typography>
                <Typography variant="h5" component="div">
                  {currentConcert.concert}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {currentConcert.artist}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {currentConcert.owner}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {currentConcert.date}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {currentConcert.country}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {currentConcert.city}
                </Typography>
              </CardContent>
              <CardActions>
                <Link to={"/edit"} style={{ textDecoration: "none" }}>
                  <Button size="medium" variant="outlined">
                    EDIT
                  </Button>
                </Link>
              </CardActions>
            </Card>
          );
        })}
      </div>
    </>
  );
}

//DELETE BUTTON PARA SER USADO NA EDIT PAGE
/* <Button
size="medium"
variant="outlined"
color="error"
startIcon={<DeleteIcon />}
//   onClick={console.log("FUNCIONAAA!")}
>
DELETE
</Button> */
