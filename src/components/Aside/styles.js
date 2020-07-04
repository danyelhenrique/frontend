import styled from "styled-components";

export const AsideContainer = styled.aside`
  height: 100vh;
  background: #1a1a1a;
  width: 80px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  position: fixed;
  left: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;

  a {
    cursor: pointer;
    margin: 20px;

    svg {
      color: #fff;
      height: 25px;
      width: 25px;
    }
  }
`;
