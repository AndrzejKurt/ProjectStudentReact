import React, { useState } from "react";
import Modal from "react-modal";
import { CreateStudent } from "./CreateStudent";
import styles from "./CreateStudentModal.module.css";

const CreateStudentModal = (props) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={openModal} className={styles.CreateStudentModal__open}>
        +
      </button>
      <Modal
        isOpen={modalIsOpen}
        className={styles.CreateStudentModal}
        overlayClassName={styles.CreateStudentModal__overlay}
      >
        <CreateStudent onCreate={props.onCreate} />
        <button
          onClick={closeModal}
          className={styles.CreateStudentModal__close}
        >
          X
        </button>
      </Modal>
    </>
  );
};

export default CreateStudentModal;
