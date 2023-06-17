import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function StartExamPage() {
  return (
    <div>
      <p>You are gone take chemistry exam </p>
      <Link to="/exercise">
        <Button variant="contained">Start Exam</Button>
      </Link>
    </div>
  );
}
