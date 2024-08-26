import { styled } from "styled-components";
import { MdOutlineSearch } from "react-icons/md";

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 10px;
  border-radius: 20px;
  background-color: white;
  width: 100%;
`;

export const InputSearchField = styled.input`
  border: none;
  outline: none;
  width: 100%;
  font-family: bahnschrift;
  font-size: 1rem;
`;

export const MdOutlineSearchIcon = styled(MdOutlineSearch)`
  color: black;
  font-size: 1.6rem;
`;