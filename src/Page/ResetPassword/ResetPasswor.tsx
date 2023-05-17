import React, { useState } from "react";
import styles from "./reset.module.css";
import Modal from "../../Component/Modal/Modal";

export default function ResetPasswor() {
  const [isOpen, setIsOpen] = useState(false);
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
              <button
                className={styles.loginBtn}
                onClick={() => setIsOpen(true)}>
                Continue
              </button>
              <Modal
                open={isOpen}
                onClose={() => setIsOpen(false)}
                children={undefined}></Modal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
