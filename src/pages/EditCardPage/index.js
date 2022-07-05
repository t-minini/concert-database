import { Link } from "react-router-dom";

// MATERIAL UI COMPONENTS
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

export function EditCardPage() {
  //   const navigate = useNavigate();

  //HANDLEDELETE PARA SER USADO NA EDIT PAGE

  //   const { _id } = useParams();

  //   async function handleDelete() {
  //     try {
  //       const response = await axios.delete(
  //         `https://ironrest.herokuapp.com/project-two-tulio-lucas/${_id}`
  //       );
  //       console.log(response._id);
  //   navigate('/');
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }

  return (
    <>
      <Link to={"/edit"} style={{ textDecoration: "none" }}>
        <Button size="small" variant="contained" color="success">
          SAVE CHANGES
        </Button>
      </Link>
      <Button
        size="small"
        variant="contained"
        color="error"
        startIcon={<DeleteIcon />}
        //   onClick={console.log("FUNCIONAAA!")}
      >
        DELETE CARD
      </Button>
      <Link to={"/home"} style={{ textDecoration: "none" }}>
        <Button size="small" variant="contained" color="success">
          HOME
        </Button>
      </Link>
    </>
  );
}
