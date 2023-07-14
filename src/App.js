import "./App.css";
// import Header from "./components/Header";
import { CurrentStudent } from "./components/CurrentStudent";
import CreateStudentModal from "./components/CreateStudentModal";
import React, { useEffect, useState } from "react"; //hook, useState allow to upadate state in component
import data from "./students.json";
import "./components/StudentsList.css";
import MapStudents from "./components/MapStudents";
import StudentsListHeaders from "./components/StudentsListHeaders";
import studentsListHeadersArray from "./components/StudentsListHeadersArray";

// const courseName = "Awesome React";
// const courseGroupName = "fullstack-2023-01";

function App() {
  let [students, setNewStudents] = useState(data.students);
  const [currentStudentsId, setCurrentStudentsId] = useState([]);
  let [sort, setSort] = useState("Grade");
  let [sortMethod, setSortMethod] = useState("DESC");
  const currentStudentFromList = students.filter(
    (student) => student.id === currentStudentsId
  );

  const handleSort = (type) => {
    setSort(type.toLowerCase());
    sortMethod === "ASC" ? setSortMethod("DESC") : setSortMethod("ASC");
  };

  useEffect(() => {
    const sorter = (array) => {
      array.sort((a, b) => {
        if (a[sort] > b[sort]) {
          return -1;
        }
        if (a[sort] < b[sort]) {
          return 1;
        } else {
          return 0;
        }
      });
      if (sortMethod === "ASC") {
        students.reverse();
      }
    };
    sorter(students);
  }, [sort, sortMethod, students]);

  const handleAnswer = (student) => {
    setCurrentStudentsId([
      ...currentStudentsId,
      { [student.id]: student.name },
    ]);
  };

  const handleCreate = (newStudent) => {
    setNewStudents([...students, newStudent]);
  };

  const handleEndAnswer = () => {
    setCurrentStudentsId(null);
  };

  return (
    <div className="App">
      <div className="App-header">
        {/* <h1>Codebrainers fullstack</h1> */}
        {/* <Header courseName={courseName} courseGroupName={courseGroupName} /> */}
        {currentStudentsId && (
          <button className="StopStudentAnswering" onClick={handleEndAnswer}>
            End student answer
          </button>
        )}
        <div className="StudentsList">
          <StudentsListHeaders
            onSort={handleSort}
            array={studentsListHeadersArray}
          />
          <MapStudents
            handleAnswer={handleAnswer}
            students={students}
            currentStudentsId={currentStudentsId}
          />
        </div>
        {currentStudentsId.length > 0 && (
          <CurrentStudent currentStudent={currentStudentsId} />
        )}
        <CreateStudentModal onCreate={handleCreate} />
      </div>
    </div>
  );
}

export default App;
