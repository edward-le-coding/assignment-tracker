import { Assignment } from "../Assignment";
import styles from "./assignments.module.css";
type Data = {
  assignments: Assignment[];
}

export function Assignments(data: Data) {
  const completed = data.assignments.filter(assignment => assignment.completed).length;
  return (
    <section className={styles.assignments}>
      <header className={styles.header}>
        <div>
          <p>Created Assignments</p>
          <span>1</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed Assignments</p>
          <span>{completed} of {data.assignments.length}</span>
        </div>
      </header>

      <div className={styles.list}>
        <Assignment />
      </div>
    </section>
  );
}
