import styles from "./CreateStudent.module.css";

const CreateStudentInput = (props) => {
  const { onChange, name, onBlur, value, placeholder, errorMessage, type } = props;

  return (
    <>
      <input
          className={styles.CreateStudent__input}
          name={name}
        value={value}
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        onBlur={onBlur}
      />
      {errorMessage && <div>{errorMessage}</div>}
    </>
  );
};
export default CreateStudentInput;
