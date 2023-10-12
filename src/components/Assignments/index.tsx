import { Assignment } from "../Assignment";
import styles from "./assignments.module.css";
type Data = {
  assignments: Assignment[];
  handleClickCompleteAssignment: (index: number) => void;
  handleClickDeleteAssignment: (deletionIndex: number) => void;
}

export function Assignments(data: Data) {
  const completed = data.assignments.filter(assignment => assignment.completed).length;
  return (
    <section className={styles.assignments}>
      <header className={styles.header}>
        <div>
          <p>Created Assignments</p>
          <span>{data.assignments.length}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed Assignments</p>
          <span>{completed} of {data.assignments.length}</span>
        </div>
      </header>

      <div className={styles.list}>
        {data.assignments.map((assignment, index) => Assignment(assignment, index, data.handleClickCompleteAssignment, data.handleClickDeleteAssignment))}
      </div>
    </section>
  );
}
