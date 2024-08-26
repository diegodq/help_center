import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiPin } from "react-icons/gi";
import { RiDashboard2Fill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { BiSolidBrush } from "react-icons/bi";

export const Container = styled.div`
	margin-top: 20px;
`;

export const Nav = styled.nav`

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
	color: #3D194F;
`;

export const NewPostIcon = styled(GiPin)`
	font-size: 1.3rem;
	color: #3D194F;
`;

export const DashboardIcon = styled(RiDashboard2Fill)`
	font-size: 1.3rem;
	color: #3D194F;
`;

export const UserIcon = styled(FaUser)`
	font-size: 1.3rem;
	color: #3D194F;
`;

export const IoIosSettingsIcon = styled(IoIosSettings)`
	font-size: 1.3rem;
	color: #3D194F;
`;

export const AppearanceIcon = styled(BiSolidBrush)`
	font-size: 1.3rem;
	color: #3D194F;
`;