import { Button, TextField } from "@mui/material";
import styles from "./contact.module.css";
import home from "./home.jpg";
export default function Contact() {
  return (
    <div>
      {/* <img src={home} alt="" /> */}
      <div className={styles.contactBg}>
        <div>
          <TextField sx={{ width: "600px", marginTop: "40px" }} />
        </div>
        <div>
          {" "}
          <TextField sx={{ width: "600px", marginTop: "40px" }} />
        </div>
        <div>
          <TextField sx={{ width: "600px", marginTop: "40px" }} />
        </div>
        <Button
          variant="contained"
          sx={{
            marginLeft: "10px",
            marginTop: "10px",
          }}>
          Contact
        </Button>
      </div>
    </div>
  );
}
