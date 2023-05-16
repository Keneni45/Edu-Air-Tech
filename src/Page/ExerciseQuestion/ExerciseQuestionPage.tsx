import React, { useState } from "react";
import Modal from "../../Component/Modal/Modal";
import MyCardComponent from "../../Component/Card";

export default function MyCard() {
  const [isOpen, setIsOpen] = useState(false);
  function handleClick() {
    setIsOpen(true);
  }

  return (
    <div>
      <div onClick={handleClick}>
        <MyCardComponent />
      </div>
      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        children={undefined}></Modal>
    </div>
  );
}
