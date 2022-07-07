import { Link } from "react-router-dom";
import style from "./EnterPage.module.css";
import backgroundImg2 from "../../images/crowd-background-2.avif";

// MATERIAL UI COMPONENTS
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export function EnterPage() {
  return (
    <>
      <div
        className={style.general}
        style={{ backgroundImage: `url(${backgroundImg2})` }}
      >
        <div className={style.enterPage}>
          <h1 className={style.h1}>Concert's</h1>
          <h2 className={style.h2}>DATABASE</h2>
          <Link to={"/home"} style={{ textDecoration: "none" }}>
            <h2 className={style.enterLink}>ENTER</h2>
          </Link>
        </div>
        <div className={style.createdBy}>
          <div>
            <h2>CREATED BY</h2>
          </div>
          <div className={style.namesGroup}>
            <div className={style.names}>
              <h3>Tulio Minini</h3>
              <a href="https://github.com/t-minini">
                <GitHubIcon sx={{ margin: 1, fontSize: 25, color: "#ffffff" }} />
              </a>
              <a href="https://www.linkedin.com/in/tulio-minini/">
                <LinkedInIcon sx={{ margin: 1, fontSize: 27, color: "#ffffff" }} />
              </a>
            </div>
            <div className={style.names}>
              <h3>Lucas Colombo</h3>
              <a href="https://github.com/lucasalbacolombo">
                <GitHubIcon sx={{ margin: 1, fontSize: 25, color: "#ffffff" }} />
              </a>
              <a href="https://www.linkedin.com/in/lucas-colombo-b7864591/">
                <LinkedInIcon sx={{ margin: 1, fontSize: 27, color: "#ffffff" }} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
