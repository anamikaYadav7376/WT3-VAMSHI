function StudentCard({ student }) {
  

  return (
    
    <div>
      <h3>{student.name}</h3>

      <p>Roll No: {student.rollNo}</p>
      <p>Branch: {student.branch}</p>
      <p>Marks: {student.marks}</p>
      <p>Attendance: {student.attendance}%</p>
     </div>
  );
}

export default StudentCard;

