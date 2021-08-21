import React from "react";
import styled from "styled-components";

const ModalBack = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(200, 200, 200, 0.7);
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
`;
const ModalContainer = styled.div`
  border-radius: 12px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 25px;
`;

const ButtonClose = styled.button`
  margin-top: 16px;
  padding: 8px 16px;
  cursor: pointer;
`;

function index({ children, setOpenModal }) {
  return (
    <ModalBack
      onClick={() => {
        setOpenModal(false);
      }}
    >
      <ModalContainer>
        {children}
        <ButtonClose
          onClick={() => {
            setOpenModal(false);
          }}
        >
          Close
        </ButtonClose>
      </ModalContainer>
    </ModalBack>
  );
}

export default index;
