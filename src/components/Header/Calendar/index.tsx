import { addMonths } from 'date-fns';
import 'react-day-picker/dist/style.css';
import styles from "./calendar.module.css";
import { useState, useEffect, createRef } from "react";
import { DayPicker } from "react-day-picker";


type props = {
    newAssignmentDueDate: Date | undefined;
    setDisplayCalendar: (shouldNowDisplayCalendar: boolean) => void;
    newAssignmentDueDateHandleChange: (inputValue: Date | undefined) => void;
}

export function Calendar(props: props) {
    const nextMonth = addMonths(new Date(), 0);
    const [month, setMonth] = useState<Date>(nextMonth);
    const calendarRef = createRef();

    function handleClickOutside(event: MouseEvent) {
        const current = calendarRef.current as any;
        if (current && !current.contains((event.target))) {
            props.setDisplayCalendar(false);
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);

    function onMonthChange(month: Date): void {
        setMonth(month);
    }

    function onDateChange(inputValue: Date | undefined): void {
        props.setDisplayCalendar(false);
        props.newAssignmentDueDateHandleChange(inputValue);
    }

    return (
        <div ref={calendarRef as React.RefObject<HTMLDivElement>} className={styles.calendar}>
            <DayPicker className={styles.calendarInner} mode="single" month={month} onMonthChange={onMonthChange} required selected={props.newAssignmentDueDate} onSelect={onDateChange} />
        </div>
    )
}