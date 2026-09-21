import { useState } from "react";
import students from "./Data.jsx";
import StudentCard from "./StudentCard";
 

function App() {
  const [showPassed, setShowPassed] = useState(false);

  const passedStudents = students.filter((student) => {
    return student.marks >= 40;
  });

  const displayedStudents = showPassed? passedStudents: students;

  return (
    <div style={{backgroundColor:"green", color:"black"}}>
      <h1>Student Dashboard</h1>

      <p>Total Students: {students.length}</p>

      <p>Passed Students: {passedStudents.length}</p>
      <div>
        {displayedStudents.map((student) => (  
         <StudentCard key={student.id}  student={student}/>
        ))}
      </div>
    </div>
    
  );
}

export default App;
