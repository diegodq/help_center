import styled from "styled-components";

export const Container = styled.div`
  background-color: #F7F7F7;
  display: flex;
  justify-content: space-around;
  padding: 10px 0;

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const LinkHome = styled.a`

`;

export const ImgLogo = styled.img`

`;

export const DivTitleLinks = styled.div`
  display: flex;
  align-items: center;
`;

export const TitlePage = styled.h2`
  font: 1.3rem bahnschrift, sans-serif;
`;

export const Link = styled.a`
  font: .9rem bahnschrift, sans-serif;
  text-decoration: none;
  color: white;
  font-weight: bold;
  padding:12px 16px;
  background-color: #3D194F;

  & + & {
    margin-left: 10px;
  }
`;

export const DivTitleLink = styled.div`
  display: flex;
  display: flex;
  align-items: center;
`;