import styled from "styled-components";

export const DatesModal = styled.div`
  background: #fff;
  width: 50%;
  height: 90%;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px;

  @media screen and (max-width: 820px) {
    width: 90%;
  }

  form {
    input {
      padding: 15px 20px;
      border-radius: 25px;
      border: none;
      border: 1px solid #dedede;
      width: 50%;
      margin: 10px 20px;
    }
  }
  button {
    background: #673ab7;
    padding: 20px;
    border-radius: 25px;
    width: 93%;
    color: #dedede;
    text-transform: uppercase;
    font-weight: bold;
    pointer-events: all;
    margin: 20px;
    outline: none;
  }
  .exit {
    background: #121212;
  }
`;
export const Modal = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  left: 0;
  z-index: 99;
  pointer-events: none;
  background: #1a1a1a9c;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalDate = styled.form`
  display: flex;
`;

export const Submitappointment = styled.button`
  &:disabled {
    cursor: not-allowed;
  }
`;

export const Addappointment = styled.div`
  padding: 30px;
  background: #1b1b1b;
  border-radius: 100px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  color: #fff;
`;
