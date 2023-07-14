const isGradeCorrect = (grade) => grade > 0 && grade < 7;
const isFieldEmpty = (field) => field.trim().length === 0;

const errorName = {
  Id: "identyfikator",
  Name: "imie",
  Question: "pytanie",
  Description: "opis",
  Grade: "ocena",
};

const validateField = (field, placeholder, type) => {
  if (isFieldEmpty(field)) {
    return `Musisz wypełnić pole ${errorName[placeholder]}`;
  }
  if (type === "number") {
    if (!isGradeCorrect(field)) {
      return `You must type ${errorName[placeholder]} from 1 do 6`;
    }
  }
  return "";
};

export const isFormValid = (id, name, question, description, grade) => {
  const isIDValid = !isFieldEmpty(id);
  const isNameValid = !isFieldEmpty(name);
  const isQuestionValid = !isFieldEmpty(question);
  const isDescriptionValid = !isFieldEmpty(description);
  const isGradeValid = grade ? isGradeCorrect(grade) : false;
  return (
    isIDValid &&
    isNameValid &&
    isQuestionValid &&
    isDescriptionValid &&
    isGradeValid
  );
};

export default validateField;
