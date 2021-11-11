import React from "react";
import { Modal } from "antd";
import closeIcon from "../assets/images/Close.png";
import CarouselItems from "./CarouselItems";
import "../styles/Modal.css";
const Modal2 = (props) => {
  return (
    <>
      <Modal
        title={props.title}
        visible={props.isVisible}
        onOk={props.handleOk}
        onCancel={props.handleCancel}
        width={"100%"}
        centered={true}
        closeIcon={<img src={closeIcon} />}
        destroyOnClose
        footer={null}
      >
        {props.hasCarousel ? <CarouselItems src={props.src} /> : props.children}
      </Modal>
    </>
  );
};

export default Modal2;
