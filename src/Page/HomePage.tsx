import styles from "./home.module.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import home from "../assets/home.jpg";
import student from "../assets/student.jpg";

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false);
  const [gradeSelected, setGradeSelected] = useState([
    {
      grade_9: "Grade 9",
      grade_10: "Grade 10",
      grade_11: "Grade 11",
      grade_12: "Grade 12",
    },
  ]);

  function handleSelectGrade(e: any) {
    setGradeSelected(e.target.value);
  }

  return (
    <div className={styles.home}>
      <div className={styles.homeNavbar}>
        <ul className={styles.ulHome}>
          <li className={styles.list6}>
            <a href="#/home" className={styles.a}>
              Home
            </a>
          </li>
          <li className={styles.list6}>
            {" "}
            <a className={styles.a} href="#/about">
              About
            </a>
          </li>
          <li className={styles.list6}>
            {" "}
            <a href="#/resource" className={styles.a}>
              Resource
            </a>
          </li>

          <Link to="/contact" style={{ textDecoration: "none" }}>
            <li className={styles.list6}>Contact</li>
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
            <div className={styles.imgBg}>
              <img src={home} alt="" className={styles.img} />
            </div>
          </div>
        </div>

        <div id="/resource">
          <p className={styles.resourceTxt}>Resource</p>
          <div className={styles.resourceLine}></div>
        </div>
        <div className={styles.resource}>
          <div className={styles.resourceLeft}>
            <div onChange={handleSelectGrade}>
              <h1>
                {gradeSelected.map((grade) => (
                  <div style={{ color: "rgb(29, 70, 69)" }}>
                    {grade.grade_9}
                  </div>
                ))}
              </h1>
            </div>
            <p style={{ marginTop: "40px", fontSize: "32px" }}>
              This platform is best suited for garde 9. Plenty of exercise for
              clean description can help you achieve your goal.
            </p>
            <div>
              <Link
                to="exercise"
                state={gradeSelected.map((grade) => grade.grade_9)}>
                <Button
                  onClick={handleSelectGrade}
                  variant="contained"
                  style={{
                    height: "30px",
                    marginTop: "30px",
                  }}>
                  Exercise
                </Button>
              </Link>

              <Link to="/practice">
                <Button
                  variant="contained"
                  style={{
                    marginLeft: "2rem",
                    height: "30px",
                    marginTop: "30px",
                  }}>
                  Practice
                </Button>
              </Link>
              <Link to="general">
                <Button
                  variant="contained"
                  style={{
                    marginLeft: "2rem",
                    height: "30px",
                    marginTop: "30px",
                  }}>
                  General
                </Button>
              </Link>
            </div>
          </div>
          <div className={styles.resourceRight}>
            <div className={styles.resourceBg}>
              <img src={student} alt="" className={styles.resourceImg} />
            </div>
          </div>
        </div>
        <div className={styles.resource1}>
          <div className={styles.leftResource1}>
            <img src={student} alt="" className={styles.leftImg} />
          </div>
          <div className={styles.rightResource1} onClick={handleSelectGrade}>
            <h1>
              {gradeSelected.map((grade) => (
                <div style={{ color: "rgb(29, 70, 69)" }}>{grade.grade_10}</div>
              ))}
            </h1>

            <p style={{ marginTop: "40px", fontSize: "32px" }}>
              This platform is best suited for garde 9. Plenty of exercise for
              clean description can help you achieve your goal.
            </p>
            <div>
              <Link
                to="exercise"
                state={gradeSelected.map((grade) => grade.grade_10)}>
                <Button
                  onClick={handleSelectGrade}
                  variant="contained"
                  style={{
                    height: "30px",
                    marginTop: "30px",
                  }}>
                  Exercise
                </Button>
              </Link>
              <Link to="/practice">
                <Button
                  variant="contained"
                  style={{
                    marginLeft: "2rem",
                    height: "30px",
                    marginTop: "30px",
                  }}>
                  Practice
                </Button>
              </Link>
              <Link to="general">
                <Button
                  variant="contained"
                  style={{
                    marginLeft: "2rem",
                    height: "30px",
                    marginTop: "30px",
                  }}>
                  General
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.resource2}>
          <div className={styles.leftResource2} onClick={handleSelectGrade}>
            <h1>
              {gradeSelected.map((grade) => (
                <div style={{ color: "rgb(29, 70, 69)" }}>{grade.grade_11}</div>
              ))}
            </h1>
            <p style={{ marginTop: "40px", fontSize: "32px" }}>
              This platform is best suited for garde 9. Plenty of exercise for
              clean description can help you achieve your goal.
            </p>
            <div>
              <Link
                to="exercise"
                state={gradeSelected.map((grade) => grade.grade_11)}>
                <Button
                  onClick={handleSelectGrade}
                  variant="contained"
                  style={{
                    height: "30px",
                    marginTop: "30px",
                  }}>
                  Exercise
                </Button>
              </Link>
              <Link to="/practice">
                <Button
                  variant="contained"
                  style={{
                    marginLeft: "2rem",
                    height: "30px",
                    marginTop: "30px",
                  }}>
                  Practice
                </Button>
              </Link>
              <Link to="general">
                <Button
                  variant="contained"
                  style={{
                    marginLeft: "2rem",
                    height: "30px",
                    marginTop: "30px",
                  }}>
                  General
                </Button>
              </Link>
            </div>
          </div>
          <div className={styles.rightResource2}>
            <img src={student} alt="" className={styles.resourceImg} />
          </div>
        </div>
        <div>
          <div className={styles.resource3}>
            <div className={styles.leftResource3}>
              <img src={student} alt="" className={styles.leftImg} />
            </div>
            <div className={styles.rightResource3} onClick={handleSelectGrade}>
              <h1>
                {gradeSelected.map((grade) => (
                  <div style={{ color: "rgb(29, 70, 69)" }}>
                    {grade.grade_12}
                  </div>
                ))}
              </h1>
              <p style={{ marginTop: "40px", fontSize: "32px" }}>
                This platform is best suited for garde 9. Plenty of exercise for
                clean description can help you achieve your goal.
              </p>
              <div>
                <Link
                  to="exercise"
                  state={gradeSelected.map((grade) => grade.grade_12)}>
                  <Button
                    onClick={handleSelectGrade}
                    variant="contained"
                    style={{
                      marginLeft: "2rem",
                      height: "30px",
                      marginTop: "30px",
                      width: "160px",
                    }}>
                    Take Exercise
                  </Button>
                </Link>
                <Link to="mock">
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
                </Link>
                <Link to="entrance">
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
                </Link>
                <Link to="exit">
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
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.aboutBody} id="/about">
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
