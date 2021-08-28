import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";

const ModalComponent = ({ toggleModal }) => {
  const modalOption = { toggleModal };
  console.log(modalOption);
  return (
    <Modal isOpen={toggleModal.isOpen}>
      <ModalHeader>{toggleModal.header}</ModalHeader>
      <ModalBody>
        <img src={toggleModal.src} alt="" />
      </ModalBody>
      <ModalFooter>
        <Button color="info" close={true}></Button>
      </ModalFooter>
    </Modal>
  );
};

export default ModalComponent;
