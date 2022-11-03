import { Link } from "react-router-dom";
import style from "./EnterPage.module.css";

// MUI Components
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export function EnterPage() {
  return (
    <section className={style.general}>
      <div className={style.enterPage}>
        <h1>Concerts</h1>
        <h2>DATABASE</h2>
        <Link to={"/home"} style={{ textDecoration: "none" }}>
          <p>ENTER</p>
        </Link>
      </div>
      <div className={style.createdBy}>
        <h2>DEVELOPED BY</h2>
        <div className={style.namesGroup}>
          <div className={style.names}>
            <h3>Tulio Minini</h3>
            <a href="https://github.com/t-minini">
              <GitHubIcon sx={{ margin: 1, fontSize: 25, color: "#ffffff" }} />
            </a>
            <a href="https://www.linkedin.com/in/tulio-minini/">
              <LinkedInIcon
                sx={{ margin: 1, fontSize: 27, color: "#ffffff" }}
              />
            </a>
          </div>
          <div className={style.names}>
            <h3>Lucas Colombo</h3>
            <a href="https://github.com/lucasalbacolombo">
              <GitHubIcon sx={{ margin: 1, fontSize: 25, color: "#ffffff" }} />
            </a>
            <a href="https://www.linkedin.com/in/lucas-colombo-b7864591/">
              <LinkedInIcon
                sx={{ margin: 1, fontSize: 27, color: "#ffffff" }}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
