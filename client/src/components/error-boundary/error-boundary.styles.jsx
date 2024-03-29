import styled from "styled-components";

export const ErrorImageOverlay = styled.div`
  height: 60vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ErrorImageContainer = styled.div`
  display: inline-block;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: cover;
  background-position: center;
  width: 40vh;
  height: 40vh;

  @media screen and (max-width: 800px) {
    width: 30vh;
    height: 30vh;
  }
`;

export const ErrorImageText = styled.h2`
  font-size: 28px;

  @media screen and (max-width: 800px) {
    font-size: 23px;
  }
`;

export const ErrorImageSubText = styled.h2`
  margin: -15px;
  font-size: 18px;

  @media screen and (max-width: 800px) {
    font-size: 15px;
  }
`;
