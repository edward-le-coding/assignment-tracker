import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";
import { Assignment } from "./components/Assignment";
import { useState } from "react";

function App() {
  const initialAssignmentList: Assignment[] = [{
    description: "Some Title",
    dueDate: new Date("2024-11-01"),
    completed: false,
    id: crypto.randomUUID()
  }];

  const [assignments, setAssignmentsList] = useState(initialAssignmentList)

  const [newAssignmentText, newAssignmentSetValue] = useState("");

  const [newAssignmentDueDate, setNewAssignmentDueDate] = useState<Date>();

  function handleAddAssignment(newAssignmentText: string, newAssignmentDueDate: Date) {
    const newAssignment: Assignment = {
      description: newAssignmentText,
      completed: false,
      dueDate: newAssignmentDueDate,
      id: crypto.randomUUID()
    }
    setAssignmentsList(assignments.concat(newAssignment));
    newAssignmentSetValue("");
    setNewAssignmentDueDate(undefined);
  }

  function handleClickCompleteAssignment(changedIndex: number) {
    setAssignmentsList(assignments.map((assignment, index) =>
      changedIndex === index ? { ...assignment, completed: !assignment.completed } : assignment));
  }

  function handleClickDeleteAssignment(deletionIndex: number) {
    setAssignmentsList(assignments.filter((assignment, index) => index != deletionIndex));
  }

  return (
    <>
      <Header newAssignment={newAssignmentText} newAssignmentHandleChange={handleAddAssignment} newAssignmentDueDate={newAssignmentDueDate} newAssignmentDueDateHandleChange={setNewAssignmentDueDate} newAssignmentUpdateState={newAssignmentSetValue} />
      <Assignments assignments={assignments} handleClickCompleteAssignment={handleClickCompleteAssignment} handleClickDeleteAssignment={handleClickDeleteAssignment} />
    </>
  );
}

export default App;
