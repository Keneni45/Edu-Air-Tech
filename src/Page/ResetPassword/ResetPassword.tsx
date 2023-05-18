//import React, { useState } from "react";
import styles from "./reset.module.css";
//import Modal from "../../Component/Modal/Modal";
import { TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function ResetPassword() {
  // const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.resetBody}>
      <div className={styles.resetOverLay}>
        <div className={styles.resetStyle}>
          <div className={styles.reset}>
            <div>
              <h1 style={{ marginLeft: "60px" }}>Reset Password</h1>
              <p
                style={{
                  fontSize: "20px",
                  marginTop: "15px",
                  marginBottom: "10px",
                  marginLeft: "18px",
                }}>
                Enter Your Email for a Password Reset
              </p>
              <hr />
            </div>

            <TextField
              id="outlined-basic"
              label="Email or Username"
              variant="outlined"
              sx={{ width: "360px", marginTop: "80px" }}
            />
            <Link to="/email" style={{ textDecoration: "none" }}>
              <p style={{ marginTop: "10px", fontSize: "20px" }}>
                Forget Email
              </p>
            </Link>
            <Link to="/otp">
              <Button
                variant="contained"
                sx={{ width: "360px", marginTop: "40px", fontWeight: "bold" }}>
                Send Reset Link
              </Button>
            </Link>
            <Link to="/login" style={{ textDecoration: "none" }}>
              <p
                style={{
                  marginTop: "20px",
                  fontSize: "20px",
                  marginLeft: "100px",
                }}>
                Back To Sign In
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
