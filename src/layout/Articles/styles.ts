import styled from "styled-components";

export const Container = styled.div`
  padding: 30px 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 940px) {
    grid-template-columns: 1fr;
  }
`;

export const Div = styled.div`
  @media (max-width: 940px) {
    margin-bottom: 20px;
  }
`;

export const Title = styled.h2`
  font: 1.2rem bahnschrift, sans-serif;
  text-align: center;
`;

export const Ul = styled.ul`

`;

export const Li = styled.li`
  text-align: center;
  font: .9rem bahnschrift, sans-serif;
`;

export const LinkShowAllPosts = styled.a`
  display: block;
  text-align: center;
  text-decoration: none;
  color: blue;
  font: 1rem bahnschrift, sans-serif;
  margin-top: 10px;
`;