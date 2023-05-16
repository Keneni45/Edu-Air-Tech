import styles from "./challenge.module.css";

import EmojiEventsSharpIcon from "@mui/icons-material/EmojiEventsSharp";
import Search from "../../Component/Search";
import Modal from "../../Component/Modal/Modal";
import { useState } from "react";

export default function Challenge() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className={styles.challengeBoard}>
        <div className={styles.board}>
          <div className={styles.leftBoard}>
            <div className={styles.smartTable}>
              <div className={styles.txt}>
                <h1>SMART </h1>
                <h1>CHALLENGE</h1>
              </div>
            </div>

            <div className={styles.leaderText}>
              <h3>LeaderBoard</h3>
            </div>
            <div className={styles.userInfo}>
              <div className={styles.profileImg}>
                <div className={styles.userName}>User Name</div>
                <div className={styles.userTxt}>
                  hhhh
                  <div style={{ marginTop: "10px" }}>
                    {" "}
                    11th Grade Social Science
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.performanceText}>
              <h3>Performance Stat</h3>
            </div>
            <div className={styles.performanceTable}>
              <div className={styles.performButton}>
                <div>
                  <button className={styles.rankBtn}>Rank</button>
                  <p style={{ marginLeft: "30px", marginTop: "10px" }}>
                    2021/11
                  </p>
                </div>
                <div>
                  <button className={styles.challengeBtn}>
                    Total Challenge
                  </button>
                  <p style={{ marginLeft: "30px", marginTop: "10px" }}>455</p>
                </div>
                <div>
                  <button className={styles.accuracyBtn}>Accuracy</button>
                  <p style={{ marginLeft: "30px", marginTop: "10px" }}>90%</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.rightBoard}>
            <h1 style={{ marginTop: "130px", marginLeft: "300px" }}>
              Top Performer of The Month
            </h1>
            <div className={styles.challengeTable}>
              <div className={styles.tableHeader}>
                <div className={styles.leftHeader}>
                  <ul className={styles.leftList}>
                    <li>
                      <h3>RANK</h3>
                    </li>
                    <li>
                      <h3>NAME</h3>
                    </li>
                    <li>
                      <h3>SCORE</h3>
                    </li>
                    <li>
                      <h3>FRIENDS SCORE</h3>
                    </li>
                  </ul>
                  <hr
                    style={{
                      marginLeft: "38px",
                      marginTop: "10px",
                      backgroundColor: "blue",
                    }}
                  />
                </div>
                <div className={styles.rightHeader}>
                  <Search
                    onSearch={(query: string) =>
                      console.log(`Searching for "${query}"...`)
                    }
                  />
                </div>
              </div>
              <div className={styles.userContainer}>
                <div className={styles.userDetailInfo}>
                  <div className={styles.userDeatilInfoList}>
                    <div className={styles.rank}>
                      <EmojiEventsSharpIcon
                        style={{ color: "orange", fontSize: "24px" }}
                      />
                    </div>
                    <div className={styles.name}></div>
                    <p className={styles.nameText}>name</p>

                    <div className={styles.score}>Score</div>
                    <div className={styles.friends}>Freinds Rank</div>
                  </div>
                </div>
                <div>
                  <button
                    className={styles.challengeButton}
                    onClick={() => setIsOpen(true)}>
                    Challenge
                  </button>
                  <Modal
                    open={isOpen}
                    onClose={() => setIsOpen(false)}
                    children={undefined}></Modal>
                </div>
                <div>
                  <button
                    className={styles.profileButton}
                    onClick={() => setIsOpen(true)}>
                    View Profile
                  </button>
                  <Modal
                    open={isOpen}
                    onClose={() => setIsOpen(false)}
                    children={undefined}></Modal>
                </div>
              </div>
              <div>
                <button className={styles.nextButton}>Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <ul className={styles.listFooter}>
          <li>
            {" "}
            <h3>Community</h3>{" "}
          </li>
          <li>
            {" "}
            <h3>Company</h3>
          </li>
        </ul>
        <div className={styles.row}>
          <ul className={styles.rowList}>
            <li>hhhh</li>
            <li>fffffff</li>
            <li>ggg</li>
          </ul>
          <ul>
            <li>gg</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
