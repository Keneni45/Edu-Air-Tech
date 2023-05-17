import React from "react";
import styles from "./otp.module.css";

export default function OtpVerficationCode() {
  return (
    <div className={styles.loginBody}>
      <div className={styles.loginOverLay}>
        <div className={styles.loginStyle}>
          <div className={styles.login}>
            <div>
              <h2>You Have Got Email</h2>
              <h4>We have sent otp verification code to your email</h4>
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
              <button className={styles.loginBtn}>Confirm</button>
              <h2>back to sign up</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
