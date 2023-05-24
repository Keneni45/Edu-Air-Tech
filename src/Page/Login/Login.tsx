import { useState, CSSProperties } from "react";
import { AxiosError } from "axios";
import { FadeLoader } from "react-spinners";
import { login } from "../../service/authService";
import { persistUser, validationSchema } from "../../utils/utils";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import styles from "./login.module.css";
import { TextField, Button } from "@mui/material";
import FacebookSharpIcon from "@mui/icons-material/FacebookSharp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GoogleIcon from "@mui/icons-material/Google";
import LoadingOverlayWrapper from "react-loading-overlay-ts";

const override: CSSProperties = {
  margin: "10 auto",
  borderColor: "red",
};

type LoginModel = {
  phone: string;
  password: string;
};
export default function Login() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const loginUser = async ({ phone, password }: LoginModel) => {
    setLoading(true);

    const user = await login(phone, password);
    if (user instanceof AxiosError) {
      setLoading(false);
      console.log("this message" + user.message);
      if (user.response.status == 422) {
        setMessage("incorrect phone or password please try again!");
      } else setMessage("oops something went wrong please try again later");
      {
        setSpinner(false);
        persistUser(user);
        window.location.href = "/user-profile";
        console.log(user);
      }
    }
  };
  function handleChange(e: any) {
    console.log(e.target.value);
  }
  const setSpinner = (active: boolean) => {
    setLoading(active);
  };
  const setMessageText = (mes: string) => {
    setMessage(mes);
  };

  const loginFormik = useFormik({
    initialValues: {
      phone: "",
      password: "",
    },
    initialTouched: {
      phone: true,
      password: true,
    },
    validationSchema: validationSchema,
    validateOnChange: true,

    onSubmit: (data) => {
      console.log(JSON.stringify(data, null, 2));
      loginUser(data);
    },
  });

  return (
    <LoadingOverlayWrapper
      active={loading}
      spinner={
        <FadeLoader
          loading={true}
          cssOverride={override}
          // size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      }>
      <div className={styles.loginBody}>
        <div className={styles.loginOverLay}>
          <div className={styles.loginStyle}>
            <form onSubmit={loginFormik.handleSubmit}>
              <div className={styles.login}>
                <p
                  style={{
                    fontSize: "28px",
                    fontWeight: "bold",
                    marginLeft: "20px",
                  }}>
                  Lets Sign In You
                </p>

                <p style={{ fontSize: "28px", marginLeft: "15px" }}>
                  Welcome Back, <br />{" "}
                </p>
                <p style={{ fontSize: "28px" }}> You Have Been Missed</p>
                <div style={{ marginLeft: "10px" }}>
                  <div style={{ marginTop: "15px" }}>
                    <TextField
                      id="outlined-basic"
                      type="text"
                      label="phone"
                      variant="outlined"
                      sx={{ width: "260px" }}
                      className={
                        "" +
                        (loginFormik.touched.phone && loginFormik.errors.phone
                          ? ""
                          : "")
                      }
                      onChange={loginFormik.handleChange}
                      value={loginFormik.values.phone}
                    />
                    <div className="invalid-feedback">
                      {loginFormik.touched.phone && loginFormik.errors.phone
                        ? loginFormik.errors.phone
                        : null}
                    </div>
                  </div>
                  <div style={{ marginTop: "15px" }}>
                    <TextField
                      id="outlined-basic"
                      label="password"
                      type="password"
                      variant="outlined"
                      sx={{ width: "260px" }}
                      className={
                        "" +
                        (loginFormik.touched.password &&
                        loginFormik.errors.password
                          ? ""
                          : "")
                      }
                      onChange={loginFormik.handleChange}
                      value={loginFormik.values.password}
                    />
                    <div className="invalid-feedback">
                      {loginFormik.touched.password &&
                      loginFormik.errors.password
                        ? loginFormik.errors.password
                        : null}
                    </div>
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
                    sx={{
                      width: "260px",
                      marginLeft: "10px",
                      marginTop: "10px",
                    }}>
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
            </form>
          </div>
        </div>
      </div>
    </LoadingOverlayWrapper>
  );
}
