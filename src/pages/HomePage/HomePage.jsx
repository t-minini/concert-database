import { Link } from "react-router-dom";
import style from "./HomePage.module.css";
import { ConcertCard } from "../../components/ConcertCard/ConcertCard";

//Material UI
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export function HomePage() {
  return (
    <section className={style.general}>
        <AppBar position="static" style={{ backgroundColor: "#E66A12" }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="home"
              sx={{ mr: 2 }}
            >
              <Link to={"/"} style={{ textDecoration: "none" }}>
                <ArrowBackIcon
                  sx={{ fontSize: 30, color: "#ffffff" }}
                ></ArrowBackIcon>
              </Link>
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
              style={{ marginRight: "50px" }}
              className={style.homeBar}
            >
              <strong>Home</strong>
            </Typography>
          </Toolbar>
        </AppBar>
      <div>
        <div className={style.scroll}>
          <ConcertCard />
        </div>
        <div className={style.btn}>
          <Link to={"/add-new"} style={{ textDecoration: "none" }}>
            <Button
              size="medium"
              variant="contained"
              color="success"
              style={{ width: "146px", marginTop: "10px" }}
            >
              ADD NEW
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
