import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";
import { Assignment } from "./components/Assignment";
import { useState } from "react";

function App() {
  const initialAssignmentList: Assignment[] = [{
    description: "Some Title",
    completed: false
  }];
  const [assignments, setAssignmentsList] = useState(initialAssignmentList)

  const [newAssignmentText, newAssignmentSetValue] = useState("");

  function handleAddAssignment(newAssignmentText: string) {
    const newAssignment: Assignment = {
      description: newAssignmentText,
      completed: false
    }
    setAssignmentsList(assignments.concat(newAssignment));
    newAssignmentSetValue("");
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
      <Header newAssignment={newAssignmentText} newAssignmentHandleChange={handleAddAssignment} newAssignmentUpdateState={newAssignmentSetValue} />
      <Assignments assignments={assignments} handleClickCompleteAssignment={handleClickCompleteAssignment} handleClickDeleteAssignment={handleClickDeleteAssignment} />
    </>
  );
}

export default App;
