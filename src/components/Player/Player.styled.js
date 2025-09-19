import styled from "styled-components";

export const PlayerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5rem;
  /* background-color: ${({ isPlayerActive }) =>
    isPlayerActive ? "yellow" : "grey"}; */
  ${(props) => props.theme.media.mobile} {
    flex-direction: row;
    
  }
`;

export const AvatarWrapper = styled.div`
  div {
    display: flex;
    width: 8rem;
    height: 35rem;
    /* filter: grayscale(100%); */
    
  }
`;
