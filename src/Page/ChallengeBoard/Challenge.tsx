import React from "react";
import styles from "./challenge.module.css";

export default function Challenge() {
  return (
    <div>
      <div className={styles.challengeBoard}>
        <div className={styles.board}>
          <div className={styles.leftBoard}>
            <div className={styles.smartTable}>
              {" "}
              <h1>
                SMART <br /> CHALLENGE
              </h1>{" "}
            </div>
            <div className={styles.leaderText}>
              {" "}
              <h3>LeaderBoard</h3>{" "}
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
                <div className={styles.leftHeader}>right</div>
                <div className={styles.rightHeader}>left</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer}>foooter</div>
    </div>
  );
}
