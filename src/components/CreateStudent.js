import PropTypes from "prop-types";
import React from "react";
import styles from "./CreateStudent.module.css";
import CreateStudentInput from "./CreateStudentInput.js";
import inputs from "./CreateStudentInputsArray";
import validateField, { isFormValid } from "./validate";

export class CreateStudent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      name: "",
      question: "",
      description: "",
      grade: "",
      errorId: "",
      errorName: "",
      errorQuestion: "",
      errorDescription: "",
      errorGrade: "",
      isDirty: false,
    };
  }

  handleInputChange = (event) => {
    const {name, value} = event.target;
    this.setState({
      [name]: value,
    }, () => {}); // wywołanie funkcji dopiero po ustawieniu setState
  };

  handleInputBlur = (event, errorName, placeholder, type) => {
    this.setState({
      isDirty: true,
      [errorName]: validateField(event.target.value, placeholder, type),
    });
  };

  clearForm = () => {
    this.setState({
      id: "",
      name: "",
      question: "",
      description: "",
      grade: "",
      isDirty: false,
    });
  };

  handleCreateStudent = (event) => {
    const { description, grade, id, name, question, isDirty } = this.state;
    // this.handleValidation();
    if (!isFormValid(id, name, question, description, grade) || !isDirty) {
      event.preventDefault();
      return;
    }
    this.props.onCreate({
      id: id.trim(),
      name: name.trim(),
      question: question.trim(),
      description: description.trim(),
      grade: +grade,
    });
    this.clearForm();
  };

  render() {
    return (
      <div className={styles.CreateStudent}>
        <form className={styles.CreateStudent__form}>
          {inputs.map(({ fieldName, errorName, placeholder, type }) => (
            <CreateStudentInput
                name={fieldName}
              value={this.state[fieldName]}
              placeholder={placeholder}
              errorMessage={this.state[errorName]}
              key={fieldName}
              type={type}
              onChange={(event) => this.handleInputChange(event, fieldName)}
              onBlur={(event) =>
                this.handleInputBlur(event, errorName, placeholder, type)
              }
            />
          ))}
          <button
            className={styles.CreateStudent__button}
            type="button"
            onClick={this.handleCreateStudent}
          >
            Create
          </button>
        </form>
      </div>
    );
  }
}

CreateStudent.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  question: PropTypes.string,
  description: PropTypes.string,
  grade: PropTypes.number,
};
