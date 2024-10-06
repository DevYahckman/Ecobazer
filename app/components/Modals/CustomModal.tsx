"use client";
import React, { ReactNode, useState } from "react";
import { Button, Modal, Space } from "antd";

interface Props {
  openModal?: boolean;
  closeModal: () => void;
  children?: ReactNode;
  width?:number|string|undefined
}

const CustomModal = ({ openModal, closeModal, children, width }: Props) => {
  return (
    <Modal open={openModal} onCancel={closeModal} centered={true} width={width}>
      <div>{children}</div>
    </Modal>
  );
};

export default CustomModal;
