import styled from "styled-components";
import { LuHelpCircle } from "react-icons/lu";

export const H1 = styled.h1`
  font: bold 1.1rem Arial, sans-serif;
  text-align: center;
  margin-bottom: 20px;
`;

export const Container = styled.div`
  display: flex;
  padding: 60px 0;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media (max-width: 1110px) {
    flex-direction: column;
  }
`;

export const DivText = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-right: 30px;

  @media (max-width: 1110px) {
    margin-bottom: 30px;
    margin-right: 0;
  }
`;

export const DivForm = styled.div`
  @media (max-width: 625px) {
    width: 100%;
  }
`;

export const LuHelpCircleIcon = styled(LuHelpCircle)`
  font-size: 3.5rem;
  margin-bottom: 20px;
`;

export const H2 = styled.h2`
  font: 1.2rem Arial, sans-serif;
  margin-bottom: 8px;
`;

export const Span = styled.span`
  font: 1rem Arial, sans-serif;
  margin-bottom: 9px;
`;

export const Paragraph = styled.p`
  font: bold 1rem Arial, sans-serif;
`;