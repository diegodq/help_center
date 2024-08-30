import styled from "styled-components";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";

export const ContainerMenu = styled.div`
	display: flex;
	position: relative;
`;

export const DataUser = styled.div`
	display: flex;
	flex-direction: column;
	align-items: end;
	margin-right: 11px;
	cursor: pointer;
`;

export const MenuHide = styled.div`
	width: 140px;
	border-radius: 5px;
	background-color: white;
	box-shadow: 0 0 2px grey;
	position: absolute;
	top: 55px;
	left: -8px;
	padding: 10px 0;
	display: none;

	&.showUserMenuHide {
		display: block;
	}
`;

export const Nav = styled.nav`

`;

export const NameUser = styled.span`
	font: 1rem bahnschrift, sans-serif;
`;

export const TypeUser = styled.span`
	font: 1rem bahnschrift, sans-serif;
	color: grey;
`;

export const UserImg = styled.img`
	height: 35px;
	width: 35px;
	border-radius: 50%;
	background-color: grey;
	margin-top: 2px;
`;

export const ChevronDownIcon = styled(FaChevronDown)`
	font-size: .9rem;
	margin-right: 5px;
	color: black;
`;

export const Ul = styled.ul`
	width: 120px;
	margin: 0 auto;
`;

export const Li = styled.li`
	font: 1rem bahnschrift, sans-serif;
	text-align: center;

	& + & {
		margin-top: 5px;
	}
`;

export const LinkScreen = styled(Link)`
	text-decoration: none;
	color: black;
`;

export const LogOut = styled.button`
	background: none;
	border: 0;
	font: 1rem bahnschrift, sans-serif;
	cursor: pointer;
`;