import React from "react";
import { Modal } from "antd";
/* import "antd/dist/antd.css"; */
import "../styles/Modal.css";
const Modal2 = (props) => {
  return (
    <>
      <Modal
        title={props.title}
        visible={props.isVisible}
        onOk={props.handleOk}
        onCancel={props.handleCancel}
      >
        <img src={props.src} alt="" />
      </Modal>
    </>
  );
};

export default Modal2;
