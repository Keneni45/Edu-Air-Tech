import { useState } from "react";
import styles from "./home.module.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";

export default function HomePage() {
  const [isHover, setIsHover] = useState(true);

  function handleClick(e: any) {
    setIsHover(e.target.value);
  }
  return (
    <div className={styles.home}>
      <div className={styles.homeNavbar}>
        <ul className={styles.ulHome}>
          {isHover ? (
            <li>Home</li>
          ) : (
            <li onClick={handleClick}>
              Home <hr />
            </li>
          )}
          {isHover ? (
            <li onClick={handleClick}>About</li>
          ) : (
            <li>
              About <hr />
            </li>
          )}

          {isHover ? (
            <li>Resource</li>
          ) : (
            <li>
              Resource <hr />
            </li>
          )}

          {isHover ? (
            <li>Contact</li>
          ) : (
            <li>
              Contact <hr />
            </li>
          )}

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
            <ul>
              <li>ggggggg</li>
              <li>gggggggggggg</li>
              <li>dddddddddddd</li>
            </ul>
            <ul>
              <li>ggggggg</li>
              <li>gggggggggggg</li>
              <li>dddddddddddd</li>
            </ul>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
