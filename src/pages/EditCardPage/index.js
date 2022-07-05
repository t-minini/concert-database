import axios from "axios";
import { CountrySelect } from "../../components/CountrySelect";
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

// MATERIAL UI COMPONENTS
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";

export function EditCardPage() {
  const navigate = useNavigate();

  const [value, setValue] = useState();

  const [country, setCountry] = useState({ label: "" });

  const { id } = useParams();

  const [form, setForm] = useState({
    owner: "",
    concert: "",
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
          `https://ironrest.herokuapp.com/project-two-tulio-lucas/${id}`
        );
        console.log(response);
        setForm(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchConcerts(id);
  }, [id]);

  useEffect(() => {
    setForm({ ...form, country: country.label });
  }, [country]);

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  function handleCountry(event, newValue) {
    setCountry(newValue);
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
        `https://ironrest.herokuapp.com/project-two-tulio-lucas/${id}`,
        clone
      );
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  }

  console.log(value);
  console.log(country);
  console.log(form);

  async function handleDelete() {
    try {
      const response = await axios.delete(
        `https://ironrest.herokuapp.com/project-two-tulio-lucas/${id}`
      );
      console.log(response._id);
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <InputLabel id="demo-simple-select-label">Owner</InputLabel>
        <Select
          labelId="owner"
          id="owner"
          name="owner"
          value={form.owner}
          label="owner"
          onChange={handleChange}
        >
          <MenuItem value={"Tulio Minini"}>Tulio Minini</MenuItem>
          <MenuItem value={"Lucas Colombo"}>Lucas Colombo</MenuItem>
        </Select>
        <TextField
          id="concert-tour"
          label="Concert/Tour"
          variant="outlined"
          name="concert"
          value={form.concert}
          onChange={handleChange}
        />
        <TextField
          id="artist"
          label="Artist"
          variant="outlined"
          name="artist"
          value={form.artist}
          onChange={handleChange}
        />
        <TextField
          id="date"
          label="Date"
          variant="outlined"
          name="date"
          value={form.date}
          onChange={handleChange}
        />
        <CountrySelect
          country={country}
          // value={country.label}
          handleCountry={handleCountry}
          name="country"
        />
        <TextField
          id="city"
          label="City"
          variant="outlined"
          name="city"
          value={form.city}
          onChange={handleChange}
        />
        <Box
          sx={{
            "& > legend": { mt: 2 },
          }}
        >
          <Typography component="legend">Rating</Typography>
          <Rating
            name="rating"
            defaultValue={form.rating}
            precision={1}
            value={value}
            onChange={handleRating}
          />
        </Box>

        <Button type="submit" size="small" variant="contained" color="success">
          SAVE CHANGES
        </Button>
        <Button
          size="small"
          variant="contained"
          color="error"
          startIcon={<DeleteIcon />}
          onClick={handleDelete}
        >
          DELETE CARD
        </Button>
        <Link to={"/home"} style={{ textDecoration: "none" }}>
          <Button size="small" variant="contained" color="success">
            HOME
          </Button>
        </Link>
      </form>
    </>
  );
}
