import styles from "./home.module.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import ArrowForwardSharpIcon from "@mui/icons-material/ArrowForwardSharp";

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.home}>
      <div className={styles.homeNavbar}>
        <ul className={styles.ulHome}>
          <li className={styles.list6}>Home</li>
          <li className={styles.list6}>About</li>
          <li className={styles.list6}>Resource</li>
          <li className={styles.list6}>Contact</li>
          <Link to="login">
            <Button
              sx={{
                width: "160px",
                border: "solid 1px",
                color: "rgb(212, 210, 227)",
                height: "50px",
              }}
              onClick={() => setIsOpen(true)}>
              Login
              <ArrowForwardSharpIcon
                sx={{ marginLeft: "4px", height: "40px" }}
              />
            </Button>
          </Link>
          <Link to="/register">
            <Button variant="contained" sx={{ width: "160px", height: "50px" }}>
              Get Started
            </Button>
          </Link>
        </ul>
      </div>
      <div className={styles.all}>
        <div className={styles.homeBody}>
          <div className={styles.leftHomeBody}>
            <h1 style={{ fontWeight: "bold", fontSize: "34px" }}>
              It's Now To Win <br /> Your Exams
            </h1>

            <p style={{ fontSize: "24px" }}>The First Ethiopia Exam Archive </p>
            <Link to="/register">
              <Button
                variant="contained"
                sx={{ width: "160px", height: "50px", marginTop: "20px" }}>
                Get Started
              </Button>
            </Link>
          </div>
          <div className={styles.middleLine}>
            <div className={styles.line}></div>
            <div className={styles.line1}></div>
            <div className={styles.line2}></div>
            <div className={styles.line4}></div>
            <div className={styles.line3}></div>
            <div className={styles.line5}></div>
          </div>

          <div className={styles.rightHomeBody}>
            <div className={styles.imgBg}></div>
          </div>
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
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Suscipit, fugiat quaerat. Rem autem error eaque sunt ex,
              consequatur illum adipisci magni, tenetur suscipit magnam odit qui
              sint fugiat libero dolores.
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
    </div>
  );
}
