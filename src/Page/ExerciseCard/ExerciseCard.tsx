import { useState, useEffect } from "react";
import { Exercise } from "../../models/exercises.model";
import { fetchExerciseCourses } from "../../service/fetchCourseService";
import { Button, Card } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import styles from "./exerciseCard.module.css";

export default function ExerciseCard() {
  const [grade, setGrade] = useState("");

  const [course, setCourse] = useState<Exercise[]>([]);
  const [selectedCourse, setSelectedCourse] = useState("");

  function handleSelectedCourse(e: any) {
    setSelectedCourse(e.target.value);
  }

  useEffect(() => {
    async function fetchCourse() {
      const courseFromServer: any = await fetchExerciseCourses();
      setCourse(courseFromServer);
    }
    fetchCourse();
  }, []);
  return (
    <div>
      {" "}
      <div></div>
      <div className={styles.cardBg}>
        <div style={{ display: "flex" }}>
          <ul style={{ display: "flex" }}>
            {course.map((items) => (
              <div>
                <li
                  key={items._id}
                  style={{ listStyle: "none", display: "flex" }}>
                  <div>
                    <Card
                      sx={{
                        width: "300px",
                        height: "300px",
                        backgroundColor: "gray",
                        margin: "50px",
                      }}>
                      <div style={{ marginTop: "200px", marginLeft: "100px" }}>
                        <h4> {items.name}</h4>
                      </div>
                      <Link to="/start-exam">
                        <div style={{ marginTop: "10px", marginLeft: "90px" }}>
                          <Button variant="contained">Exercise</Button>
                        </div>
                      </Link>
                    </Card>
                  </div>
                </li>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
