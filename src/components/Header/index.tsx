import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";
import { DayPicker } from "react-day-picker";
import { TbCalendar } from "react-icons/tb";
import { MouseEvent, ReactNode, useState } from "react";

type HeaderData = {
  newAssignment: string;
  newAssignmentDueDate: Date | undefined;
  newAssignmentDueDateHandleChange: (inputValue: Date | undefined) => void;
  newAssignmentHandleChange: (newAssignmentText: string, newAssignmentDueDate: Date) => void;
  newAssignmentUpdateState: (inputValue: string) => void;
}

export function Header(props: HeaderData) {

  const [displayCalendar, setDisplayCalendar] = useState(false);

  function isNotSubmittable(): boolean {
    if (props.newAssignmentDueDate && props.newAssignment) {
      return false;
    } else {
      return true;
    }
  }
  function displayDatePicker(e: MouseEvent) {
    if (e) {
      e.preventDefault();
    }
    setDisplayCalendar(!displayCalendar);
  }

  function submitAssignment(e: MouseEvent): void {
    e.preventDefault();
    if (props.newAssignmentDueDate && props.newAssignment) {
      props.newAssignmentHandleChange(props.newAssignment, props.newAssignmentDueDate);
    }
  }

  function displayCalendarOrCalendarButton(): ReactNode {
    if (displayCalendar) {
      return <DayPicker className={styles.calendar} mode="single" required selected={props.newAssignmentDueDate} onSelect={props.newAssignmentDueDateHandleChange} />
    } else {
      return <TbCalendar xlinkShow="" />
    }
  }

  return (
    <header className={styles.header}>
      <h1>{uppercase("bcit")} Assignment Tracker</h1>
      <form className={styles.newAssignmentForm}>
        <input placeholder="Add a new assignment" type="text" value={props.newAssignment} onChange={e => props.newAssignmentUpdateState(e.target.value)} />
        <button onClick={displayDatePicker}>
          {displayCalendarOrCalendarButton()}
        </button>
        <button disabled={isNotSubmittable()} onClick={(e) => submitAssignment(e)}>
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header >
  );
}
