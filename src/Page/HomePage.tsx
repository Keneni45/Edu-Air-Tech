import styles from "./home.module.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
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

        <div>
          <p className={styles.resourceTxt}>Resource</p>
          <div className={styles.resourceLine}></div>
        </div>
        <div className={styles.resource}>
          <div className={styles.resourceLeft}>
            <div>
              <h1 style={{ color: "rgb(29, 70, 69)" }}>Grade 9</h1>
            </div>
            <p style={{ marginTop: "40px", fontSize: "32px" }}>
              This platform is best suited for garde 9. Plenty of exercise for
              clean description can help you achieve your goal.
            </p>
            <div>
              <Button
                variant="contained"
                style={{
                  height: "30px",
                  marginTop: "30px",
                }}>
                Exercise
              </Button>
              <Button
                variant="contained"
                style={{
                  marginLeft: "2rem",
                  height: "30px",
                  marginTop: "30px",
                }}>
                Practice
              </Button>
              <Button
                variant="contained"
                style={{
                  marginLeft: "2rem",
                  height: "30px",
                  marginTop: "30px",
                }}>
                General
              </Button>
            </div>
          </div>
          <div className={styles.resourceRight}>image</div>
        </div>
        <div className={styles.resource1}>
          <div className={styles.leftResource1}>left</div>
          <div className={styles.rightResource1}>
            <div>
              <h1 style={{ color: "rgb(29, 70, 69)" }}>Grade 9</h1>
            </div>
            <p style={{ marginTop: "40px", fontSize: "32px" }}>
              This platform is best suited for garde 9. Plenty of exercise for
              clean description can help you achieve your goal.
            </p>
            <div>
              <Button
                variant="contained"
                style={{
                  height: "30px",
                  marginTop: "30px",
                }}>
                Exercise
              </Button>
              <Button
                variant="contained"
                style={{
                  marginLeft: "2rem",
                  height: "30px",
                  marginTop: "30px",
                }}>
                Practice
              </Button>
              <Button
                variant="contained"
                style={{
                  marginLeft: "2rem",
                  height: "30px",
                  marginTop: "30px",
                }}>
                General
              </Button>
            </div>
          </div>
        </div>
        <div className={styles.resource2}>
          <div className={styles.leftResource2}>
            <div>
              <h1 style={{ color: "rgb(29, 70, 69)" }}>Grade 9</h1>
            </div>
            <p style={{ marginTop: "40px", fontSize: "32px" }}>
              This platform is best suited for garde 9. Plenty of exercise for
              clean description can help you achieve your goal.
            </p>
            <div>
              <Button
                variant="contained"
                style={{
                  height: "30px",
                  marginTop: "30px",
                }}>
                Exercise
              </Button>
              <Button
                variant="contained"
                style={{
                  marginLeft: "2rem",
                  height: "30px",
                  marginTop: "30px",
                }}>
                Practice
              </Button>
              <Button
                variant="contained"
                style={{
                  marginLeft: "2rem",
                  height: "30px",
                  marginTop: "30px",
                }}>
                General
              </Button>
            </div>
          </div>
          <div className={styles.rightResource2}>right</div>
        </div>
        <div>
          <div className={styles.resource3}>
            <div className={styles.leftResource3}>left</div>
            <div className={styles.rightResource3}>
              <div>
                <h1 style={{ color: "rgb(29, 70, 69)" }}>Grade 9</h1>
              </div>
              <p style={{ marginTop: "40px", fontSize: "32px" }}>
                This platform is best suited for garde 9. Plenty of exercise for
                clean description can help you achieve your goal.
              </p>
              <div>
                <Button
                  variant="contained"
                  style={{
                    marginLeft: "2rem",
                    height: "30px",
                    marginTop: "30px",
                    width: "160px",
                  }}>
                  Take Exercise
                </Button>
                <Button
                  variant="contained"
                  style={{
                    marginLeft: "2rem",
                    height: "30px",
                    marginTop: "30px",
                    width: "160px",
                  }}>
                  Mock Exercise
                </Button>
                <Button
                  variant="contained"
                  style={{
                    marginLeft: "2rem",
                    height: "30px",
                    marginTop: "30px",
                    width: "160px",
                  }}>
                  Entrance Exam
                </Button>
                <Button
                  variant="contained"
                  color="success"
                  style={{
                    marginLeft: "2rem",
                    height: "30px",
                    marginTop: "30px",
                    width: "160px",
                  }}>
                  Exit Exam
                </Button>
              </div>
            </div>
          </div>
          <div className={styles.aboutBody}>
            <p className={styles.aboutTxt}>About</p>
            <div className={styles.aboutLine}></div>
            <p style={{ fontSize: "24px", marginTop: "20px" }}>
              We are Warriors, the first ever Ethiopia and East African exam
              archive for primary and secondary students.
            </p>
          </div>
          <div className={styles.lastTxt}>
            <h3>How we can help you become better ?</h3>
            <p style={{ marginTop: "20px" }}>
              We are web based exam deliver and assistance company on youngsters
              and energetic generation. we are high insight ful where an
              organized platform can boost a learning process through
              technology. our platform is free forever and enjoy your learning
              process with us.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.footerContent}>
        <div className={styles.footer}>
          <p className={styles.contact}>Contact</p>
          <div className={styles.contactLine}></div>
          <div className={styles.footerItem}>
            <div className={styles.socialMedia}>
              <div>
                <FacebookIcon sx={{ color: "blue", marginTop: "20px" }} />
              </div>
              <div>
                <LinkedInIcon sx={{ color: "blue", marginTop: "20px" }} />
              </div>
              <div>
                <TwitterIcon sx={{ color: "blue", marginTop: "20px" }} />
              </div>
            </div>
            <div>2022 ggggg</div>

            <div className={styles.txtFooter}>
              <div>
                <p className={styles.title}>comunity</p>
                <ul className={styles.listItem}>
                  <li>hh</li>
                  <li>hhh</li>
                  <li>hh</li>
                  <li>hhh</li>
                </ul>
              </div>

              <div>
                <p>comunity</p>
                <ul className={styles.listItem}>
                  <li>hh</li>
                  <li>hhh</li>
                  <li>hh</li>
                  <li>hhh</li>
                </ul>
              </div>

              <div>
                <p>comunity</p>
                <ul className={styles.listItem}>
                  <li>hh</li>
                  <li>hhh</li>
                  <li>hh</li>
                  <li>hhh</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
