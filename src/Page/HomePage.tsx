import styles from "./home.module.css";
import ArrowForwardSharpIcon from "@mui/icons-material/ArrowForwardSharp";
export default function HomePage() {
  return (
    <div className={styles.home}>
      <div className={styles.homeNavbar}>
        <ul className={styles.ulHome}>
          <li>Home</li>
          <li>About</li>
          <li>Resource</li>
          <li>Contact</li>
          <button className={styles.getStartedButton}>
            Go To
            <ArrowForwardSharpIcon style={{ color: "black" }} />
          </button>
          <button className={styles.exerciseNowButton}>Exercise Now</button>
        </ul>
      </div>
      <div className={styles.homeBody}>
        <div className={styles.leftHomeBody}>
          {" "}
          <h1>It's Now To Win Your Exams</h1>
          <h3>The First Ethiopia Exam Archive </h3>
          <button className={styles.exerciseNowButton}>
            Get Started
            <ArrowForwardSharpIcon style={{ color: "black" }} />
          </button>
        </div>
        <div className={styles.rightHomeBody}>image</div>
      </div>
    </div>
  );
}
