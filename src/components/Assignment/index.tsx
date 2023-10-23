import styles from "./assignment.module.css";
import { TbTrash, TbCheck } from "react-icons/tb";

export type Assignment = {
  description: string;
  completed: boolean;
  dueDate: Date;
  id: string;
}

export function Assignment(
  assignment: Assignment,
  index: number,
  handleClickCompleteAssignment: (index: number) => void,
  handleClickDeleteAssignment: (deletionIndex: number) => void) {

  function completedTextStyle() {
    if (assignment.completed) {
      return styles.textCompleted;
    } else {
      return "";
    }
  }

  function daysToCompletionBox() {
    const today = new Date();
    const difference = assignment.dueDate.getDate() - today.getDate();
    let displayText;
    if (difference == 1) {
      displayText = "Due: tomorrow";
    } else {
      displayText = "Due: " + difference + " days away";
    }
    return (<div className={difference == 1 ? `${styles.daysToCompletionBoxBasicStyle} ${styles.daysToCompletionBoxTomorrow}` : `${styles.daysToCompletionBoxBasicStyle} ${styles.daysToCompletionBoxRegular}`}>
      {displayText}
    </div>);
  }

  return (
    <div className={styles.assignment}>
      <div className={styles.assignmentInfo}>
        <button className={styles.checkContainer} onClick={() => handleClickCompleteAssignment(index)}>
          {assignment.completed ? <TbCheck className={styles.completedCheck} size={20} /> : <div />}
        </button>
        <div>
          <p className={completedTextStyle()}> {assignment.description}</p>
        </div>
        {daysToCompletionBox()}
      </div>
      <button className={styles.deleteButton} onClick={() => handleClickDeleteAssignment(index)}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}
