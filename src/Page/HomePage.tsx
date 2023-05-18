import styles from "./home.module.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import ArrowForwardSharpIcon from "@mui/icons-material/ArrowForwardSharp";
//import { Button } from "@mui/material/IconButton";

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.home}>
      <div className={styles.homeNavbar}>
        <ul className={styles.ulHome}>
          <li>Home</li>
          <li>About</li>
          <li>Resource</li>
          <li>Contact</li>
          <Link to="login">
            <Button
              sx={{ width: "160px", border: "solid 1px" }}
              onClick={() => setIsOpen(true)}>
              Login{" "}
              <ArrowForwardSharpIcon
                sx={{ marginLeft: "4px", height: "40px" }}
              />
            </Button>
          </Link>
          <Button variant="contained" sx={{ width: "160px" }}>
            Get Started
          </Button>
        </ul>
      </div>

      <div className={styles.homeBody}>
        <div className={styles.leftHomeBody}>
          <h1>It's Now To Win Your Exams</h1>
          <h3>The First Ethiopia Exam Archive </h3>
          <button className={styles.exerciseNowButton}>Get Started</button>
        </div>
        <div className={styles.rightHomeBody}>image</div>
      </div>
      <CardContent />
      <div>
        {" "}
        <h2>
          Resource <hr />
        </h2>
      </div>
      <div className={styles.resource}>
        <div className={styles.leftResource}>
          Grade 9 <hr />
        </div>
        <div className={styles.rightResource}>image</div>
      </div>
      <div>
        About <hr />
      </div>
      <div className={styles.about}>
        <div className={styles.leftAbout}>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit,
            fugiat quaerat. Rem autem error eaque sunt ex, consequatur illum
            adipisci magni, tenetur suscipit magnam odit qui sint fugiat libero
            dolores.
          </p>
        </div>
        <div></div>
      </div>
      <div className={styles.footer}>
        <div className={styles.leftFooter}>
          <h2>Contact</h2>
          <div>
            <ul className={styles.listFooter}>
              <li>Follow us :</li>
              <li className={styles.icon}>
                <FacebookIcon />
              </li>
              <li>
                <LinkedInIcon />
              </li>
              <li>
                <TwitterIcon />
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.rightFooter}>
          <div>
            <ul className={styles.rightFooter}>
              <li>
                <h4>Mobile App</h4>{" "}
              </li>

              <li>
                {" "}
                <h4>Community</h4>
              </li>
              <li>
                <h4>Company</h4>
              </li>
            </ul>
            <div className={styles.list}>
              <ul>
                <li>ggggggg</li>
                <li>gggggggggggg</li>
                <li>dddddddddddd</li>

                <li>ggggggg</li>
                <li>gggggggggggg</li>
                <li>dddddddddddd</li>
              </ul>
            </div>
          </div>
          <div>
            <Button>Login</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
