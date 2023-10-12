import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";
import { Assignment } from "./components/Assignment";
import { useState } from "react";

function App() {
  const assignments: Assignment[] = [{
    description: "Some Title",
    completed: false
  }];

  const [newAssignmentText, newAssignmentSetValue] = useState("");

  function handleAddAssignment(newAssignmentText: string) {
    const newAssignment: Assignment = {
      description: newAssignmentText,
      completed: false
    }
    assignments.push(newAssignment);
  }

  return (
    <>
      <Header newAssignment={newAssignmentText} newAssignmentHandleChange={handleAddAssignment} newAssignmentUpdateState={newAssignmentSetValue} />
      <Assignments assignments={assignments} />
    </>
  );
}

export default App;
