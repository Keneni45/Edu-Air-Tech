import ProgressBar from "../Component/ProgressBar";
import styles from "./question.module.css";
export default function QuestionPage() {
  return (
    <div className={styles.questionBody}>
      <div className={styles.courseTitle}>
        <h2> Course</h2>
      </div>
      <div className={styles.examHeader}>
        <div className={styles.studentName}>hhhh</div>
        <div className={styles.timer}>dddd</div>
      </div>
      <div>
        <ProgressBar />
      </div>
    </div>
  );
}
