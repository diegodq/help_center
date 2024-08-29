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

`;

export const Ul = styled.ul`
`;

export const UlSubMenu = styled.ul`

`;

export const LiSubMenu = styled.li`
	padding: 6px 0 6px 37px;
`;

export const Li = styled.li`
	display: flex;
	align-items: center;
	padding: 8px 0 8px 16px;
`;

export const LinkMenu = styled(Link)`
	text-decoration: none;
	color: black;
	font: 1rem bahnschrift, sans-serif;
	margin-left: 4px;

	&:hover {
		text-decoration: underline;
	}
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

export const PostsSubMenu = styled.div`
	background-color: #efefef;
	padding: 5px 0;
	display: none;

	&.togglePostSubMenu {
		display: block;
	}
`;

export const UsersSubMenu = styled.div`
	background-color: #efefef;
	padding: 5px 0;
	display: none;

	&.toggleUsersSubmenu {
		display: block;
	}
`;