import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useFormik } from "formik";
import styles from "./login.module.css";
import { TextField, Button } from "@mui/material";
import FacebookSharpIcon from "@mui/icons-material/FacebookSharp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GoogleIcon from "@mui/icons-material/Google";

type LoginModel = {
  phone: string;
  password: string;
};
export default function Login() {
  const location = useLocation();
  const [message, setMessage] = useState("");
  let [loading, setLoading] = useState(false);

  useEffect(() => {}, []);

  const loginFormik = useFormik({
    initialValues: {
      phone: "",
      password: "",
    },
    initialTouched: {
      phone: true,
      password: true,
    },
    // validationSchema: loginValidationSchema,
    // validateOnChange: true,

    onSubmit: (data) => {
      console.log(JSON.stringify(data, null, 2));
      loginUser(data);
    },
  });

  return (
    <div className={styles.loginBody}>
      <div className={styles.loginOverLay}>
        <div className={styles.loginStyle}>
          {/* <div className={styles.login}></div>{" "}
          <div> */}
          <div className={styles.login}>
            <p style={{ fontSize: "38px", fontWeight: "bold" }}>
              Lets Sign In You
            </p>
            {/* <h4>Welcome Back, </h4> <h4>You Have Been Missed</h4> */}
            <p style={{ fontSize: "28px", marginLeft: "20px" }}>
              Welcome Back, <br />{" "}
            </p>
            <p style={{ fontSize: "28px" }}> You Have Been Missed</p>
            <div style={{ marginLeft: "10px" }}>
              <div style={{ marginTop: "20px" }}>
                <TextField
                  id="outlined-basic"
                  label="username"
                  variant="outlined"
                  sx={{ width: "260px" }}
                />
              </div>
              <div style={{ marginTop: "20px" }}>
                <TextField
                  id="outlined-basic"
                  label="password"
                  type="password"
                  variant="outlined"
                  sx={{ width: "260px" }}
                />
              </div>
            </div>
            <div>
              <Link to="/reset" style={{ textDecoration: "none" }}>
                <p
                  style={{
                    fontSize: "16px",
                    marginTop: "10px",
                    marginLeft: "150px",
                  }}>
                  Forget Password ?
                </p>
              </Link>
            </div>
            <div>
              <Button
                variant="contained"
                sx={{ width: "260px", marginLeft: "10px", marginTop: "10px" }}>
                Sign in
              </Button>
            </div>
            <div>
              <hr style={{ marginTop: "20px" }} />
            </div>
            <div style={{ marginTop: "20px" }}>
              <ul className={styles.unOrderedList}>
                <li>
                  <FacebookSharpIcon sx={{ color: "blue" }} />
                </li>
                <li>
                  <LinkedInIcon sx={{ color: "blue" }} />
                </li>
                <li>
                  <GoogleIcon sx={{ color: "blue" }} />
                </li>
              </ul>
            </div>
            <p>
              Do You Have an Account ?
              <Link to="/register" style={{ textDecoration: "none" }}>
                <b>Register</b>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
function loginUser(data: { phone: string; password: string }) {
  throw new Error("Function not implemented.");
}
