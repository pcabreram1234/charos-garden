import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import "../styles/Modal.css";
const ModalComponent = (props, { toggleModal }) => {
  return (
    <Modal centered={true} size="lg" isOpen={props.isOpen} toggle={toggleModal}>
      <ModalHeader>{props.header}</ModalHeader>
      <ModalBody>
        <img src={props.src} alt="" />
      </ModalBody>
      <ModalFooter>
        <Button>Cerrar</Button>
      </ModalFooter>
    </Modal>
  );
};

export default ModalComponent;
