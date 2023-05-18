import React, { useState } from "react";
import styles from "./cretae.module.css";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

import SuccessModal from "../../Component/SuccessModal";
import Modal from "../../Component/Modal/Modal";

export default function CreateNewPassword() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.createBody}>
      <div className={styles.createOverLay}>
        <div className={styles.createStyle}>
          <div className={styles.create}>
            <h1 style={{ marginLeft: "20px", marginBottom: "30px" }}>
              Create New Password
            </h1>
            <h3 style={{ marginLeft: "70px" }}>Enter your new password</h3>
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              sx={{ width: "360px", marginTop: "40px" }}
            />
            <TextField
              id="outlined-basic"
              label="Confirm Password"
              variant="outlined"
              sx={{ width: "360px", marginTop: "40px" }}
            />
            <Button
              onClick={() => setIsOpen(true)}
              variant="contained"
              sx={{
                width: "160px",
                marginLeft: "90px",
                marginTop: "50px",
                height: "46px",
              }}>
              Confirm
            </Button>
            <Modal
              open={isOpen}
              onClose={() => setIsOpen(false)}
              children={undefined}></Modal>
          </div>
        </div>
      </div>
    </div>
  );
}
