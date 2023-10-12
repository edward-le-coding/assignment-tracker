import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";

export type Assignment = {
  description: string;
  completed: boolean;
}

export function Assignment() {
  return (
    <div className={styles.assignment}>
      <button className={styles.checkContainer}>
        <div />
      </button>

      <p>Some Title</p>

      <button className={styles.deleteButton}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}
