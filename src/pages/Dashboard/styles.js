import styled from "styled-components";

export const Container = styled.section`
  height: 100%;

  display: flex;
  flex-direction: column;
`;

export const UserAndDatePicker = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 820px) {
    flex-wrap: wrap;
  }
`;

export const User = styled.div`
  display: flex;

  background: #1b1b1b;
  padding: 10px 20px;
  border-radius: 100px;
  align-items: center;

  img {
    height: 45px;
    width: 45px;
    border-radius: 100%;
    margin-right: 10px;
  }
  div {
    display: flex;
    flex-direction: column;
    line-height: calc(15px * 1.5);

    span {
      color: #fff;
    }
    p {
      font-size: 0.8rem;
      color: #ababab;
    }
  }
`;

export const TodayAndDatePicker = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }

  a {
    padding: 30px 80px;
    background: #1b1b1b;
    border-radius: 100px;
    height: 45px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    cursor: pointer;
    margin: 0 20px;

    @media screen and (max-width: 820px) {
      padding: 30px 100px;
      margin: 20px 0;
    }
  }
`;

export const DatePicker = styled.div`
  padding: 30px 80px;
  background: #1b1b1b;
  border-radius: 100px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;

  @media screen and (max-width: 820px) {
    padding: 30px 100px;
  }
`;

export const Content = styled.div`
  height: 100%;
  width: 100%;
  background: #1a1a1a;
  margin: 20px 0;
  border-radius: 5px;

  display: flex;
  flex-direction: column;
`;

export const DateWeek = styled.div`
  color: #fff;

  display: flex;
  justify-content: space-between;
  padding: 20px;
  background: #333;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;

  h4 {
    width: 340px;
  }
  div {
    display: flex;
    width: 80%;
    text-transform: capitalize;

    justify-content: space-between;
    span {
      color: #fff;
    }
  }
`;
export const ContentItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const ContentItem = styled.div`
  display: flex;
  margin: 10px 0;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const UserData = styled.div`
  display: flex;

  background: #1b1b1b;
  padding: 10px 20px;
  border-radius: 100px;
  align-items: center;
  flex-direction: column;
  img {
    height: 45px;
    width: 45px;
    border-radius: 100%;
    margin-right: 10px;
  }

  div {
    display: flex;
    flex-direction: column;
    line-height: calc(15px * 1.5);

    span {
      color: #fff;
    }
    p {
      font-size: 0.8rem;
      color: #ababab;
    }
  }
`;
export const UserItem = styled.div`
  display: flex;
  flex-direction: column;
`;
export const DateAppoitment = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
`;

export const Dates = styled.div`
  flex-direction: column;

  margin: 0 5px;

  div {
    span {
      padding: 7px 13px;
      border-radius: 5px;
      margin: 5px 0;
      padding: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #1a1a1a;
    }

    strong {
      padding: 7px 13px;
      border-radius: 5px;
      margin: 5px 0;
      padding: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0.8;
    }
  }
`;

export const Entrada = styled.div`
  strong {
    color: #2196f3;
  }
  span {
    background: #2196f3;
  }
`;
export const Almoco = styled.div`
  strong {
    color: #ffc107;
  }
  span {
    background: #ffc107;
  }
`;
export const Saida = styled.div`
  strong {
    color: #f44336;
  }
  span {
    background: #f44336;
  }
`;

export const FimdoAlmoco = styled.div`
  strong {
    color: #f44336;
  }
  span {
    background: #673ab7;
  }
`;

export const DatesModal = styled.div`
  background: #fff;
  width: 50%;
  height: 90%;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px;

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

export const Submitappointment = styled.button``;
