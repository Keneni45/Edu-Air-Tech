import React, { useState } from "react";
import Modal from "./Modal";

const buttonStyle: any = {
  position: "relative",
  zIndex: 1,
};
// const contentStyle: any = {
//   position: "relative",
//   zIndex: 2,
//   backgroundcolor: "red",
//   padding: "10px",
// };

export default function ModalButton() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div style={buttonStyle}>
        <button onClick={() => setIsOpen(true)}></button>
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          Login
        </Modal>
      </div>
    </>
  );
}
