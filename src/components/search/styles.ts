import { styled } from "styled-components";
import { MdOutlineSearch } from "react-icons/md";

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 10px;
  border-radius: 20px;
  border: 1px solid white;
  width: 600px;
  background-color: white;

  @media (max-width: 580px) {
    width: 90%;
  }
`;

export const InputSearchField = styled.input`
  border: none;
  outline: none;
  width: 100%;
`;

export const MdOutlineSearchIcon = styled(MdOutlineSearch)`
  color: black;
  font-size: 1.6rem;
`;