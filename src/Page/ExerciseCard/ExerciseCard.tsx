// import { Children, useEffect, useState } from "react";
// import styles from "./exerciseCard.module.css";
// import { Link } from "react-router-dom";
// import ArrowForwardSharpIcon from "@mui/icons-material/ArrowForwardSharp";
// import Typography from "@mui/material/Typography";
// import CardContent from "@mui/material/CardContent";
// import Card from "@mui/material/Card";
// import CardMedia from "@mui/material/CardMedia";
// import { Button } from "@mui/material";

// import { fetchQuestionCourses } from "../../service/fetchCourseService";
// import { Exercise } from "../../models/exercises.model";
// import Modal from "../../Component/Modal/Modal";

// export default function ExerciseCard() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [course, setCourse] = useState<Exercise[]>([]);
//   const [isFetched, setIsFetched] = useState(true);
//   const [selectedCourse, setSelectedCourse] = useState<string>("");

//   function handleSelectedCourse(e: any) {
//     setSelectedCourse(e.target.value);
//   }

//   useEffect(() => {
//     if (isFetched) {
//       async function fetchCourse() {
//         const courseFromServer: any = await fetchQuestionCourses();
//         setCourse(courseFromServer);
//       }
//       fetchCourse();
//     }
//   }, [isFetched]);

//   return (
//     <div>
//       <div className={styles.home}>
//         <div className={styles.homeNavbar}>
//           <ul className={styles.ulHome}>
//             <li className={styles.list6}>Home</li>
//             <li className={styles.list6}>About</li>
//             <li className={styles.list6}>Resource</li>
//             <li className={styles.list6}>Contact</li>
//             <Link to="login">
//               <Button
//                 sx={{
//                   width: "160px",
//                   border: "solid 1px",
//                   color: "rgb(212, 210, 227)",
//                   height: "50px",
//                 }}
//                 onClick={() => setIsOpen(true)}>
//                 Login
//                 <ArrowForwardSharpIcon
//                   sx={{ marginLeft: "4px", height: "40px" }}
//                 />
//               </Button>
//             </Link>
//             <Link to="/register">
//               <Button
//                 variant="contained"
//                 sx={{ width: "160px", height: "50px" }}>
//                 Get Started
//               </Button>
//             </Link>
//           </ul>
//         </div>
//       </div>
//       <div className={styles.bgExercise}>
//         <h1>You Can Start The Exercise Now!</h1>
//       </div>
//       <div>
//         <div className={styles.cardC}>
//           <ul className={styles.listCard}>
//             {course.map((items) => (
//               <li
//                 key={items._id}
//                 className={
//                   items.type === "important" ? "importantItem" : "normalItem"
//                 }>
//                 <div className={styles.cardContainer}>
//                   <Card
//                     sx={{
//                       width: "350px",
//                       height: "400px",
//                       backgroundColor: "red",
//                       alignItems: "center",
//                       // margin: "50px",
//                     }}>
//                     <CardMedia />
//                     <CardContent />
//                     <Typography gutterBottom variant="h5" component="div">
//                       {items.name}
//                     </Typography>
//                     <Typography>
//                       <Button
//                         variant="contained"
//                         onClick={() => setIsOpen(true)}>
//                         Exercise
//                       </Button>
//                       <Modal open={isOpen} onClose={() => setIsOpen(false)}>
//                         Login
//                       </Modal>
//                     </Typography>
//                   </Card>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import { Exercise } from "../../models/exercises.model";
import { fetchQuestionCourses } from "../../service/fetchCourseService";
import { Button, Card } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./exerciseCard.module.css";

export default function ExerciseCard() {
  const [grade, setGrade] = useState("");
  const [course, setCourse] = useState<Exercise[]>([]);
  const [selectedCourse, setSelectedCourse] = useState("");

  function handleSelectedCourse(e: any) {
    setSelectedCourse(e.target.value);
  }

  useEffect(() => {
    async function fetchCourse(gradeId: string) {
      const courseFromServer: any = await fetchQuestionCourses(gradeId);
      setCourse(courseFromServer);
    }
    fetchCourse(grade);
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
