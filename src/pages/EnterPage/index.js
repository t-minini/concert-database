import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export function EnterPage() {
  return (
    <>
      <div>
        <h1>CONCERT'S DATABASE</h1>
        <Link to={`/home`} style={{ textDecoration: "none" }}>
          <Button variant="contained">ENTER</Button>
        </Link>
      </div>
      <div>
        <div>
          <h3>Tulio Minini</h3>
          <a href="https://github.com/t-minini">
            <GitHubIcon fontSize="large" />
          </a>
          <a href="https://www.linkedin.com/in/tulio-minini/">
            <LinkedInIcon fontSize="large" />
          </a>
        </div>
        <div>
          <h3 divider>Lucas Colombo</h3>
          <a href="https://github.com/lucasalbacolombo">
            <GitHubIcon fontSize="large" />
          </a>
          <a href="https://www.linkedin.com/in/lucas-colombo-b7864591/">
            <LinkedInIcon fontSize="large" />
          </a>
        </div>
      </div>
    </>
  );
}
