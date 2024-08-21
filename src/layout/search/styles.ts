import { styled } from "styled-components";

export const SearchArea = styled.div`
  height: 300px;
  background-color: #3D194F;
  position: relative;
`;

export const TitleArea = styled.h2`
  font: 1.3rem Arial, sans-serif;
  color: white;
  margin-bottom: 15px;
  
`;

export const Div = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 580px) {
    width: 100%;
  }
`;