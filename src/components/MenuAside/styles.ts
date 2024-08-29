import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiPin } from "react-icons/gi";
import { RiDashboard2Fill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { BiSolidBrush } from "react-icons/bi";

export const Container = styled.div`
	margin-top: 20px;
	position: fixed;
	top: 130px;
	width: inherit;
`;

export const Nav = styled.nav`
	border: 1px solid red;
`;

export const Ul = styled.ul`
`;

export const Li = styled.li`
	display: flex;
	align-items: center;
	padding: 8px 0 8px 16px;

	&:hover {
		background-color: #e8e8e8;
	}
`;

export const LinkMenu = styled(Link)`
	text-decoration: none;
	color: black;
	font: 1rem bahnschrift, sans-serif;
	margin-left: 4px;
`;

export const NewPostIcon = styled(GiPin)`
	font-size: 1.3rem;
`;

export const DashboardIcon = styled(RiDashboard2Fill)`
	font-size: 1.3rem;
`;

export const UserIcon = styled(FaUser)`
	font-size: 1.3rem;
`;

export const IoIosSettingsIcon = styled(IoIosSettings)`
	font-size: 1.3rem;
`;

export const AppearanceIcon = styled(BiSolidBrush)`
	font-size: 1.3rem;
`;