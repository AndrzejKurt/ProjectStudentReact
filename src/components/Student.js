import React from "react";
import PropTypes from "prop-types";
import "./Student.css";

const Student = (props) => {
  const handleAnswerClick = () => {
    props.onAnswer(props);
  };
  return (
    <div className="Student">
      <div> {props.id}</div>
      <div> {props.name}</div>
      <div> {props.question}</div>
      <div> {props.description}</div>
      <div> {props.grade}</div>
      <button
        disabled={props.isAnswering}
        className="button__studentAnswering"
        onClick={handleAnswerClick}
      >
        Is student answering: {props.isAnswering === true ? "yes" : "no"}
      </button>
    </div>
  );
};

Student.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  grade: PropTypes.number,
};

export default Student;
