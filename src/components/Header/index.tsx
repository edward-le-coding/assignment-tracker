import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";
import { TbCalendar } from "react-icons/tb";
import { MouseEvent, ReactNode, useState } from "react";
import { Calendar } from "./Calendar";

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

  function shouldDisplayCalendar(shouldNowDisplayCalendar: boolean) {
    setDisplayCalendar(shouldNowDisplayCalendar);

  }
  function submitAssignment(e: MouseEvent): void {
    e.preventDefault();
    if (props.newAssignmentDueDate && props.newAssignment) {
      props.newAssignmentHandleChange(props.newAssignment, props.newAssignmentDueDate);
    }
  }

  function displayCalendarOrCalendarButton(): ReactNode {
    if (displayCalendar) {
      return (
        <>
          <button onClick={displayDatePicker}>
            <TbCalendar xlinkShow="" />
          </button>
          <Calendar newAssignmentDueDate={props.newAssignmentDueDate} setDisplayCalendar={shouldDisplayCalendar} newAssignmentDueDateHandleChange={props.newAssignmentDueDateHandleChange} />
        </>);
    }
    return (
      <button onClick={displayDatePicker}>
        <TbCalendar xlinkShow="" />
      </button>
    )
  }

  return (
    <header className={styles.header}>
      <h1>{uppercase("bcit")} Assignment Tracker</h1>
      <form className={styles.newAssignmentForm}>
        <input placeholder="Add a new assignment" type="text" value={props.newAssignment} onChange={e => props.newAssignmentUpdateState(e.target.value)} />
        {displayCalendarOrCalendarButton()}
        <button disabled={isNotSubmittable()} onClick={(e) => submitAssignment(e)}>
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header >
  );
}
