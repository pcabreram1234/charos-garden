import React from "react";
import { Modal } from "antd";
import closeIcon from "../assets/images/Close.png";
import "../styles/Modal.css";
const Modal2 = (props) => {
  return (
    <>
      <Modal
        title={props.title}
        visible={props.isVisible}
        onOk={props.handleOk}
        onCancel={props.handleCancel}
        width={"80%"}
        centered={true}
        footer={null}
        closeIcon={<img src={closeIcon} />}
      >
        <img src={props.src} alt="" width="80%" />
      </Modal>
    </>
  );
};

export default Modal2;
