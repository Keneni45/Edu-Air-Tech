import styles from "./challenge.module.css";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";

export default function Challenge() {
  return (
    <div>
      <div className={styles.challengeBoard}>
        <div className={styles.board}>
          <div className={styles.leftBoard}>
            <div className={styles.smartTable}>
              <h1>
                SMART <br /> CHALLENGE
              </h1>
            </div>
            <div className={styles.leaderText}>
              <h3>LeaderBoard</h3>
            </div>
            <div className={styles.userInfo}>profile</div>
            <div className={styles.performanceText}>
              <h3>Performance Stat</h3>
            </div>
            <div className={styles.performanceTable}></div>
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
                  Search <SearchSharpIcon />
                </div>
              </div>
              <div className={styles.userContainer}>
                <div className={styles.userDetailInfo}>
                  <div className={styles.userDeatilInfoList}>
                    <div>right</div>
                    <div>center</div>
                    <div>Name</div>
                    <div>left</div>
                  </div>
                </div>
                <div>Challenge</div>
                <div>View Profile</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer}>foooter</div>
    </div>
  );
}
