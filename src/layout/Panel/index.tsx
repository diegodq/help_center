import React, { ReactElement } from "react";
import { Container, Header, Aside, Main, DivContent, Div } from "./styles";
import MenuIcon from "../../components/MenuIcon";
import LogoIcon from "../../components/LogoIcon";
import UserMenu from "../../components/UserMenu";
// import LogoAside from "../../components/LogoAside";
import MenuAside from "../../components/MenuAside";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../../components/Dashboard";
import Posts from "../../components/Posts";
import Users from "../../components/Users";
import Theme from "../../components/Theme";
import Settings from "../../components/Settings";

// type HandleSlideInType = () => void;

// type HandleSlideOutType = () => void;

const Painel: React.FC = (): ReactElement => {
	// const asideMenuRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

	// const handleSlideIn: HandleSlideInType = () => {
	// 	if (asideMenuRef.current)
	// 		asideMenuRef.current.classList.add('slidePanel');
	// }

	// const handleSlideOut: HandleSlideOutType = () => {
	// 	if (asideMenuRef.current)
	// 		asideMenuRef.current.classList.remove('slidePanel');
	// }

	return (
		<Container>
			<Header>
				<Div className="divLeft">
					<MenuIcon />
					<LogoIcon />
				</Div>
				<Div className="divRight">
					<UserMenu />
				</Div>
			</Header>
			<Aside>
				{/* <LogoAside /> */}
				<MenuAside />
			</Aside>
			<DivContent>
				<Main>
					<Routes>
						<Route path="/" element={<Dashboard />} />
						<Route path="/dashboard" element={<Dashboard />} />
            <Route path="posts" element={<Posts />} />
            <Route path="users" element={<Users />} />
            <Route path="theme" element={<Theme />} />
            <Route path="settings" element={<Settings />} />
					</Routes>
				</Main>
			</DivContent>
		</Container>
	)
}

export default Painel;