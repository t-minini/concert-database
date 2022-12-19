import axios from "axios";
import { useEffect, useState } from "react";
import style from "./EditCardPage.module.css";
import { Link, useParams, useNavigate } from "react-router-dom";


// MUI Components
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import Select from "@mui/material/Select";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import MenuItem from "@mui/material/MenuItem";
import HomeIcon from "@mui/icons-material/Home";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import FormControl from "@mui/material/FormControl";

export function EditCardPage() {
  const navigate = useNavigate();

  const [value, setValue] = useState();

  const { id } = useParams();

  const [form, setForm] = useState({
    owner: "",
    tour: "",
    artist: "",
    date: "",
    country: "",
    city: "",
    rating: "",
  });

  useEffect(() => {
    async function fetchConcerts() {
      try {
        const response = await axios.get(
          `https://concerts-api.cyclic.app/concerts/${id}`
        );
        console.log(response);
        setForm(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchConcerts(id);
  }, [id]);

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
      const clone = { ...form };

      delete clone._id;
      await axios.put(
        `https://concerts-api.cyclic.app/concerts/${id}`,
        clone
      );
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  }

  async function handleDelete() {
    try {
      const response = await axios.delete(
        `https://concerts-api.cyclic.app/concerts/${id}`
      );
      console.log(response._id);
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
            <strong>Edit Concert</strong>
          </Typography>
        </Toolbar>
      </AppBar>
      <form onSubmit={handleSubmit} className={style.form}>
        <TextField
          className={style.textField}
          id="concert-tour"
          label="Concert/Tour"
          variant="outlined"
          name="concert"
          value={form.tour}
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
        <FormControl
		className={style.textField}
        >
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
            <MenuItem value={"Lucas Colombo"}>Lucas Colombo</MenuItem>
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
        <Typography style={{ fontSize: "25px" }} component="legend">
          Rating
        </Typography>
        <Rating
          name="rating"
          style={{ fontSize: "50px", margin: "auto", marginTop: 0 }}
          precision={1}
          value={Number(form.rating)}
          onChange={handleRating}
        />
        <div className={style.btns}>
          <Button
            type="submit"
            variant="contained"
            color="success"
          >
            Save Changes
          </Button>
          <Button
            variant="contained"
            color="error"
            startIcon={<DeleteIcon />}
            onClick={handleDelete}
          >
            Delete Card
          </Button>
        </div>
      </form>
    </section>
  );
}
