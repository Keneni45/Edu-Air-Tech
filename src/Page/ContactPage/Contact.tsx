import { Button, TextField } from "@mui/material";
import styles from "./contact.module.css";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";

export default function Contact() {
  return (
    <div className={styles.body}>
      <div className={styles.contactBg}>
        <div>
          <h1 style={{ width: "180px", marginLeft: "200px" }}>
            Contact Us
            <hr />
          </h1>
        </div>
        <div>
          <TextField
            sx={{ width: "600px", marginTop: "40px" }}
            placeholder="username"
          />
        </div>
        <div>
          {" "}
          <TextField
            sx={{ width: "600px", marginTop: "40px", alignContent: "center" }}
            placeholder="Email Address"
          />
        </div>
        <div>
          <TextField
            sx={{ width: "600px", marginTop: "40px" }}
            placeholder="Phone Number"
          />
        </div>
        <div>
          <TextareaAutosize
            style={{ width: "600px", height: "200px", marginTop: "40px" }}
            placeholder="Your Message"
          />
        </div>
        <div>
          <Button
            variant="contained"
            sx={{
              width: "550px",
              marginTop: "30px",
              marginLeft: "30px",
              marginRight: "30px",
            }}>
            Send
          </Button>
        </div>
      </div>
      <div className={styles.contactFooter}>
        <div>
          <h1>Our Social Media Pages</h1>
        </div>
        <div>
          <ul className={styles.listSocial}>
            <li>
              <FacebookIcon sx={{ color: "blue", marginTop: "20px" }} />
            </li>
            <li>
              <LinkedInIcon sx={{ color: "blue", marginTop: "20px" }} />
            </li>
            <li>
              <TwitterIcon sx={{ color: "blue", marginTop: "20px" }} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
