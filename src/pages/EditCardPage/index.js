import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

export function EditCardPage() {
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
    </>
  );
}
