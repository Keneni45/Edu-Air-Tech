import { useState } from "react";
import styles from "./otp.module.css";
import OtpInput from "react-otp-input";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export default function OtpVerficationCode() {
  const [otp, setOtp] = useState("");
  return (
    <div className={styles.otpBody}>
      <div className={styles.otpOverLay}>
        <div className={styles.otpStyle}>
          <div className={styles.otp}>
            <h1 style={{ marginLeft: "50px", marginRight: "50px" }}>
              You've Got Email
            </h1>
            <hr style={{ marginTop: "15px" }} />
            <p
              style={{
                fontSize: "24px",
                marginLeft: "10px",
                marginTop: "15px",
              }}>
              We have sent otp verification code to your email address check
              your email
              <p style={{ marginLeft: "50px", marginBottom: "35px" }}>
                and enter the code below
              </p>
            </p>
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={4}
              renderSeparator={<span style={{ margin: "10px" }}></span>}
              renderInput={(props) => <input {...props} />}
              inputStyle={{ width: "30px", height: "30px", marginLeft: "30px" }}
            />
            <Link to="" style={{ textDecoration: "none" }}>
              <p
                style={{
                  marginLeft: "120px",
                  marginTop: "20px",
                  fontSize: "20px",
                }}>
                Didn't receive email ?{" "}
              </p>
            </Link>
            <Link to="" style={{ textDecoration: "none" }}>
              <p
                style={{
                  marginLeft: "104px",
                  marginTop: "15px",
                  fontSize: "20px",
                }}>
                You can resend code in 55s
              </p>
            </Link>
            <Link to="/createpassword">
              <Button
                variant="contained"
                sx={{
                  width: "180px",
                  marginLeft: "90px",
                  marginTop: "20px",
                  height: "40px",
                }}>
                Confirm
              </Button>
            </Link>
            <Link to="/login" style={{ textDecoration: "none" }}>
              <p
                style={{
                  fontSize: "18px",
                  marginLeft: "120px",
                  marginTop: "10px",
                  fontWeight: "bold",
                }}>
                Back to sign in
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
