//import TwitterIcon from "@mui/icons-material/Twitter";
//import InterpreterModeIcon from "@mui/icons-material/InterpreterMode";
import { useState } from "react";
import styles from "./home.module.css";

export default function HomePage() {
  const [isHover, setIsHover] = useState(true);
  return (
    <div className={styles.home}>
      <div className={styles.homeNavbar}>
        <ul className={styles.ulHome}>
          {isHover ? <li>Home</li> : <hr />}
          <li>About</li>
          <li>Resource</li>
          <li>Contact</li>
          <button className={styles.getStartedButton}>Go To</button>
          <button className={styles.exerciseNowButton}>Exercise Now</button>
        </ul>
      </div>{" "}
      <div className={styles.homeBody}>
        <div className={styles.leftHomeBody}>
          {" "}
          <h1>It's Now To Win Your Exams</h1>
          <h3>The First Ethiopia Exam Archive </h3>
          <button className={styles.exerciseNowButton}>Get Started</button>
        </div>
        <div className={styles.rightHomeBody}>image</div>
      </div>
      <div className={styles.footer}>
        <div className={styles.leftFooter}>
          <h2>Contact</h2>
          <div>
            <ul className={styles.listFooter}>
              <li>Follow us :</li>
              <li>Facebook</li>
              <li>Linkedin</li>
              <li>twittwer</li>
            </ul>
          </div>
        </div>
        <div className={styles.rightFooter}>
          <div>
            <ul>
              <li>Community</li>
              <li>Community</li>
              <li>Community</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
