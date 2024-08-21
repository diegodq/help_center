import { styled } from "styled-components";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa6";
import { TfiHelpAlt } from "react-icons/tfi";

export const Container = styled.div`
  background-color: #F7F7F7;
  display: flex;
  justify-content: space-around;

  @media (max-width: 449px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const DivFooter = styled.div`
  height: 120px;
  background-color: #F7F7F7;
  display: flex;
  align-items: center;
`;

export const DivTitle = styled.span`

`;

export const Email = styled.span`
  color: #000000;
`;

export const RiInstagramFillIcon = styled(RiInstagramFill)`
  font: 1.8rem Arial, sans-serif;
  color: #3D194F;
`;

export const FaLinkedinIcon = styled(FaLinkedin)`
  font: 1.8rem Arial, sans-serif;
  color: #3D194F;
`;

export const TfiHelpAltIcon = styled(TfiHelpAlt)`
  font-size: 2.4rem;
  margin-right: 10px;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleHelpCenter = styled.span`
  font: 1rem Arial, sans-serif;
`;

export const EmailLink = styled.a`
  font: 1rem Arial, sans-serif;
  text-decoration: none;
  color: #000000;
`;

export const Link = styled.a`
  text-decoration: none;
`;