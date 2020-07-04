import styled from "styled-components";

export const NavContainer = styled.nav`
  width: 100%;
  display: flex;
  padding: 20px 0;
  ul {
    display: flex;

    li.selectd {
      border-bottom: 2px solid #673ab7;
      a {
        color: #fff;
      }
    }

    li {
      padding: 10px;

      & + li {
        margin: 0 10px;
        padding: 10px 10px 0px 0px;
      }

      a {
        /* padding: 10px; */
        font-size: 0.9rem;

        font-size: 1rem;
        color: #827f7f;
      }
    }
  }
`;
