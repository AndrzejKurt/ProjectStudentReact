import React from "react";
import PropTypes from "prop-types";
import styles from "./CurrentStudentClass.module.css";

export class CurrentStudent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    const currentStudentArray = [];

    return (
      <div className={styles.CurrentStudentClass}>
        Current student:{" "}
        {this.props.currentStudent
          .map((student) => Object.values(student))
          .join(" ")}
      </div>
    );
  }
}
CurrentStudent.propTypes = {
  currentStudent: PropTypes.array.isRequired,
};
