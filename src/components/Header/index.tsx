import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";

type HeaderData = {
  newAssignment: string;
  newAssignmentHandleChange: (newAssignmentText: string) => void;
  newAssignmentUpdateState: (inputValue: string) => void;
}

export function Header(props: HeaderData) {
  const isNotSubmittable = props.newAssignment.length === 0;
  return (
    <header className={styles.header}>
      {/* This is simply to show you how to use helper functions */}
      <h1>{uppercase("bcit")} Assignment Tracker</h1>
      <form className={styles.newAssignmentForm}>
        <input placeholder="Add a new assignment" type="text" value={props.newAssignment} onChange={e => props.newAssignmentUpdateState(e.target.value)} />
        <button disabled={isNotSubmittable} onSubmit={() => props.newAssignmentHandleChange(props.newAssignment)}>
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
