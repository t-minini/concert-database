import axios from "axios";
import { useState } from "react";
import style from "./AddNewPage.module.css";
import { useNavigate, Link } from "react-router-dom";


// MUI Components
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import Select from "@mui/material/Select";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import HomeIcon from "@mui/icons-material/Home";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

export function AddNewPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    owner: "",
    concert: "",
    artist: "",
    date: "",
    country: "",
    city: "",
    rating: "",
  });

  const [value, setValue] = useState();

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  function handleRating(event, newValue) {
    setValue(newValue);
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await axios.post(
        "https://ironrest.herokuapp.com/project-two-tulio-lucas",
        form
      );
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section className={style.general}>
      <AppBar position="static" style={{ backgroundColor: "#E66A12" }}>
        <Toolbar>
          <IconButton
          >
            <Link to={"/home"} style={{ textDecoration: "none" }}>
              <HomeIcon sx={{ fontSize: 30, color: "#ffffff" }}></HomeIcon>
            </Link>
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            style={{ marginRight: "50px" }}
          >
            <strong>Add New</strong>
          </Typography>
        </Toolbar>
      </AppBar>
      <form
        className={style.form}
        onSubmit={handleSubmit}
      >
        <TextField
          className={style.textField}
          id="concert-tour"
          label="Concert/Tour"
          variant="outlined"
          name="concert"
          value={form.concert}
          onChange={handleChange}
        />
        <TextField
          className={style.textField}
          id="artist"
          label="Artist"
          variant="outlined"
          name="artist"
          value={form.artist}
          onChange={handleChange}
        />
        <FormControl className={style.textField}>
          <InputLabel id="demo-simple-select-label">Attendee</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="owner"
            value={form.owner}
            label="Attendee"
            onChange={handleChange}
            style={{ textAlign: "left" }}
          >
            <MenuItem value={"Tulio Minini"}>Tulio Minini</MenuItem>
          </Select>
        </FormControl>
        <TextField
          className={style.textField}
          id="date"
          label="Date"
          variant="outlined"
          name="date"
          value={form.date}
          onChange={handleChange}
        />
        <TextField
          className={style.textField}
          id="city"
          label="City"
          variant="outlined"
          name="city"
          value={form.city}
          onChange={handleChange}
        />
        <TextField
          className={style.textField}
          id="country"
          label="Country"
          variant="outlined"
          name="country"
          value={form.country}
          onChange={handleChange}
        />
              <Typography component="legend" style={{ fontSize: "25px", margin: "auto", marginBottom: 0 }}>
                Rating
              </Typography>
              <Rating
                name="rating"
                defaultValue={1}
                precision={1}
                value={value}
                onChange={handleRating}
                style={{ fontSize: "50px", margin: "auto", marginTop: 0 }}
              />
            <Button
              style={{ width: "146px", margin: "auto" }}
              variant="contained"
              type="submit"
            >
              Submit
            </Button>
      </form>
    </section>
  );
}
