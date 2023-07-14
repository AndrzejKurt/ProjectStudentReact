import Student from "./Student";
import React from "react";
import PropTypes from "prop-types";

const MapStudents = ({ students, handleAnswer, currentStudentsId }) => {
  if (students.length === 0) {
    return null;
  }
  return students.map((student, index) =>
    student.grade ? (
      <Student
        key={index}
        id={student.id}
        name={student.name}
        question={student.question}
        description={student.description}
        grade={student.grade}
        onAnswer={handleAnswer}
        isAnswering={currentStudentsId.some(
          (currentStudent) => Object.keys(currentStudent)[0] === student.id
        )}
      />
    ) : (
      <div>Student {student.name} nie ma oceny</div>
    )
  );
};

MapStudents.propTypes = {
  students: PropTypes.array.isRequired,
  handleAnswer: PropTypes.func.isRequired,
  currentStudentsId: PropTypes.array,
};
export default MapStudents;
