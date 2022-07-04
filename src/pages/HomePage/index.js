import { ConcertCard } from "../../components/ConcertCard";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

export function Home() {
  return (
    <>
      <h1>CONCERT'S DATABASE</h1>
      <h3>HOME</h3>
      <ConcertCard />
      <Link to={"/add-new"} style={{ textDecoration: "none" }}>
        <Button size="small" variant="contained" color="success">
          ADD NEW
        </Button>
      </Link>
    </>
  );
}
