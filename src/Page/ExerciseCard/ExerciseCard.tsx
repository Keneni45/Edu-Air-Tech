import React, { useState } from "react";
import styles from "./exerciseCard.module.css";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import ArrowForwardSharpIcon from "@mui/icons-material/ArrowForwardSharp";
export default function ExerciseCard() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.home}>
      <div className={styles.homeNavbar}>
        <ul className={styles.ulHome}>
          <li className={styles.list6}>Home</li>
          <li className={styles.list6}>About</li>
          <li className={styles.list6}>Resource</li>
          <li className={styles.list6}>Contact</li>
          <Link to="login">
            <Button
              sx={{
                width: "160px",
                border: "solid 1px",
                color: "rgb(212, 210, 227)",
                height: "50px",
              }}
              onClick={() => setIsOpen(true)}>
              Login
              <ArrowForwardSharpIcon
                sx={{ marginLeft: "4px", height: "40px" }}
              />
            </Button>
          </Link>
          <Link to="/register">
            <Button variant="contained" sx={{ width: "160px", height: "50px" }}>
              Get Started
            </Button>
          </Link>
        </ul>
      </div>
    </div>
  );
}
