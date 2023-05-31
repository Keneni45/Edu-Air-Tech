import ReactDom from "react-dom";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import SelectDropdown, { SelectOption } from "../SelectDropdown";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Exercise } from "../../models/exercises.model";
import styles from "./modal.module.css";
import { fetchExerciseCourses } from "../../service/fetchCourseService";

type modalProps = {
  children: any;
  open: boolean;
  onClose: any;
};

export default function Modal({ children, open, onClose }: modalProps) {
  const [course, setCourse] = useState<SelectOption[]>([]);
  const [chapter, setChapter] = useState<SelectOption[]>([]);
  const [exerciseNumber, setExerciseNumber] = useState<SelectOption[]>([]);
  const [isFetched, setIsFetched] = useState(true);

  if (!open) return null;
  useEffect(() => {
    async function fetchCourse() {
      const courseFromServer: any = await fetchExerciseCourses();
      setCourse(courseFromServer);
    }
    fetchCourse();
  }, [isFetched]);

  function handleCourseChange() {}
  function handleChapterChange() {}
  function handleExerciseNumber() {}

  return ReactDom.createPortal(
    <>
      <div className={styles.overLay} />
      <div className={styles.modalStyle}>
        <button onClick={onClose} className={styles.closeButton}>
          <CloseSharpIcon />
        </button>
        <div>
          <SelectDropdown
            title=""
            items={chapter}
            handleSelect={handleCourseChange}
          />

          <SelectDropdown
            title=""
            items={chapter}
            handleSelect={handleChapterChange}
          />
          <SelectDropdown
            title=""
            items={exerciseNumber}
            handleSelect={handleExerciseNumber}
          />
        </div>
        <div>
          <Link to="/exercise">
            <Button variant="contained">Submit</Button>
          </Link>
        </div>
      </div>
    </>,

    document.getElementById("portal")
  );
}
