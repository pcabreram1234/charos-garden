import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import "../styles/Modal.css";
const ModalComponent = (props,{toggleModal}) => {
  return (
    <Modal
      isOpen={props.toggle}
      toggle={toggleModal}
      centered={true}
      size="lg"
    >
      <ModalHeader>{props.header}</ModalHeader>
      <ModalBody>
        <img src={props.src} alt="" />
      </ModalBody>
      <ModalFooter>
        <Button onClick={toggleModal}>Cerrar</Button>
      </ModalFooter>
    </Modal>
  );
};

export default ModalComponent;
