import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        REVIEW
      </Typography>
      <Typography variant="h5" component="div">
        CONCERT/TOUR
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
        <Button size="small">EDIT</Button>
      </Link>
      <Button size="small">DELETE</Button>
    </CardActions>
  </React.Fragment>
);

// const navigate = useNavigate();

export function ConcertCard() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
