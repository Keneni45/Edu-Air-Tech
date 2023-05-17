import React from "react";
import styles from "./cretae.module.css";

export default function CreateNewPassword() {
  return (
    <div className={styles.loginBody}>
      <div className={styles.loginOverLay}>
        <div className={styles.loginStyle}>
          <div className={styles.login}>
            <div>
              <h2>Lets Sign You In</h2>
              <h4>Welcome Back, </h4> <h4>You Have Been Missed</h4>
            </div>
            <div>
              <input type="text" placeholder="email" />
            </div>
            <div>
              <input type="text" placeholder="email" />
            </div>
            <div>
              <input type="text" placeholder="email" />
            </div>
            <div>
              <input type="text" placeholder="email" />
            </div>
            <div>
              <button className={styles.loginBtn}>Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
