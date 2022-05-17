import axios from "axios";
import { useEffect, useState } from "react";

const RealStudents = () => {
  const [student, setstudent] = useState([]);

  useEffect(() => {
    realStudent();
  }, []);

  const realStudent = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/real/students`);  
      setstudent(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <ul>
        {student.map((student, index) => (
          <li key={`RealStudents${index}`}>
            {student.character} known as {student.nickname} from{" "}
            {student.hogwartsHouse}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RealStudents;
