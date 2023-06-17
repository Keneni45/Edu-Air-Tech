import { Button } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

export default function StartExamPage() {
  const location = useLocation();
  const data = location.state?.data;
  return (
    <div>
      <p>You are gone take chemistry exam </p>
      <Link to="/exercise" state={data}>
        <Button variant="contained">Start Exam</Button>
      </Link>
    </div>
  );
}
