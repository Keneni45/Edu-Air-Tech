import { Button, TextField } from "@mui/material";
import styles from "./registration.module.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";
import { persistUser, validationSchema } from "../../utils/utils";
import { useFormik } from "formik";
import { AxiosError } from "axios";
import { signup } from "../../service/authService";

export default function Registartion() {
  const [age, setAge] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const handleChangeGrade = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
  function handleChange(e: any) {
    console.log(e.target.files);
  }
  const signupUser = async (data: any) => {
    const user: any = await signup(data);
    console.log(user);

    if (user instanceof AxiosError) {
      setLoading(false);

      console.log("this is message " + user.message);
      if ((user.response?.status || 0) >= 400) {
        setMessage(JSON.stringify(user.response) || "empty");
      } else setMessage("oops something went wrong please try again later");
    } else {
      setLoading(false);
      persistUser(user);
      window.location.href = "/user-profile";
    }
  };
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      phone: "",
    },
    initialTouched: {
      username: true,
      email: true,
      password: true,
      phone: true,
      passwordConfirmation: true,
    },
    validationSchema: validationSchema,
    validateOnChange: true,
    onSubmit: (data) => {
      console.log(data);
      //  if (file)
      signupUser(data);
    },
  });
  return (
    <div className={styles.loginBody}>
      <div className={styles.loginOverLay}>
        <div className={styles.loginStyle}>
          <div className={styles.login}>
            <form onSubmit={formik.handleSubmit}>
              <div>
                <h1 style={{ marginLeft: "10px" }}>
                  Lets Register <br />
                  Account
                </h1>
                <p
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    marginBottom: "10px",
                  }}>
                  Hello, You have a great joyful journey
                </p>
              </div>
              <div style={{ marginTop: "10px" }}>
                <TextField
                  id="outlined-basic"
                  label="username"
                  type="text"
                  variant="outlined"
                  sx={{ width: "260px" }}
                />
              </div>
              <div>
                <FormControl sx={{ width: "260px", marginTop: "15px" }}>
                  <InputLabel>-grade-</InputLabel>
                  <Select
                    value={age}
                    label="grade"
                    onChange={handleChangeGrade}>
                    <MenuItem value={9}>9 th</MenuItem>
                    <MenuItem value={10}>10 th</MenuItem>
                    <MenuItem value={11}>11 th</MenuItem>
                    <MenuItem value={12}>12 th</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div style={{ marginTop: "15px" }}>
                <TextField
                  id="outlined-basic"
                  label="phone"
                  type="text"
                  variant="outlined"
                  sx={{ width: "260px" }}
                />
              </div>
              <div style={{ marginTop: "15px" }}>
                <TextField
                  id="outlined-basic"
                  label="email"
                  type="email"
                  variant="outlined"
                  sx={{ width: "260px" }}
                />
              </div>
              <div style={{ marginTop: "15px" }}>
                <TextField
                  id="outlined-basic"
                  label="Password"
                  type="password"
                  variant="outlined"
                  sx={{ width: "260px" }}
                />
              </div>
              <Button
                variant="contained"
                sx={{
                  width: "180px",
                  marginLeft: "40px",
                  marginTop: "20px",
                  height: "40px",
                }}>
                Sign up
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
