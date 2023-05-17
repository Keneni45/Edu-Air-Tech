import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useFormik } from "formik";
import styles from "./login.module.css";

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
function loginUser(data: { phone: string; password: string }) {
  throw new Error("Function not implemented.");
}
