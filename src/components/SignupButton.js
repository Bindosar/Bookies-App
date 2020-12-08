import React, { useState } from "react";
import Signup from "./Signup";

import { SignupButtonStyled } from "../style";

const SignupButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <>
      <SignupButtonStyled onClick={openModal}>Sign up</SignupButtonStyled>;
      <Signup isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};

export default SignupButton;
