import styled from "styled-components";

export const HeaderContainer = styled.header`
         display: flex;
         width: 100%;
         height: 130px;
         background: transparent;

         display: flex;
         align-items: center;
         justify-content: space-between;

         border-bottom: 1px solid rgba(41, 41, 41, 0.2);
         padding-bottom: 10px;

         h1 {
           font-size: 1.2rem;
           font-weight: 600;
           text-transform: uppercase;
           color:#fff;
         }
       `;

export const HeaderItems = styled.div`
  display: flex;
  align-items: center;
`;

export const Notifications = styled.button`
         border-radius: 100%;

         background: #1b1b1b;
         border-radius: 100%;
         margin: 0 10px;

         svg {
           height: 40px;
           width: 40px;
           padding: 10px;
           color: #656464;
         }
       `;

export const UserCover = styled.div`
  display: flex;
  img {
    height: 45px;
    width: 45px;
    border-radius: 100%;
  }
`;
