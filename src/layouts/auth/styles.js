import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  background: #121212;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;
  width: 100%;
  max-width: 315px;
  text-align: center;
  padding: 20px;
  border-radius: 5px;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    height: 350px;
    justify-content: space-between;
    input {
      background: rgba(0, 0, 0, 0.2);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;
      border-bottom: 1px solid #dede;
      outline: none;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #3b9eff;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2 ease;

      :hover {
      }
    }

    a {
      color: #fff;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;
      margin: 5px 0 0;
      height: 44px;
      background: #7159c1;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      display: flex;
      align-items: center;
      justify-content: center;

      :hover {
        opacity: 1;
      }
    }
  }
`;
