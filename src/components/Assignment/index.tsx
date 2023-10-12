import styles from "./assignment.module.css";
import { TbTrash, TbCheck } from "react-icons/tb";

export type Assignment = {
  description: string;
  completed: boolean;
}

export function Assignment(
  assignment: Assignment,
  index: number,
  handleClickCompleteAssignment: (index: number) => void,
  handleClickDeleteAssignment: (deletionIndex: number) => void) {

  return (
    <div className={styles.assignment}>
      <button className={styles.checkContainer} onClick={() => handleClickCompleteAssignment(index)}>
        {assignment.completed ? <TbCheck className={styles.completedCheck} size={20} /> : <div />}
      </button>

      <p>{assignment.description}</p>

      <button className={styles.deleteButton} onClick={() => handleClickDeleteAssignment(index)}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}
