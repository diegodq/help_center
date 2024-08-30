import React, { ReactElement, RefObject, useRef, useState } from 'react';
import { Container, Header, Aside, Main, DivContent, Div, SlidePanelIndicator} from './styles';
import MenuIcon from '../../components/MenuIcon';
import LogoIcon from '../../components/LogoIcon';
import UserMenu from '../../components/UserMenu';
import LogoAside from '../../components/LogoAside';
import MenuAside from '../../components/MenuAside';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../../components/Dashboard';
import Posts from '../../components/Posts';
import Users from '../../components/Users';
import Theme from '../../components/Theme';
import Settings from '../../components/Settings';
import NewPost from '../../components/NewPost';
import NewUser from '../../components/NewUser';
import NewCategory from '../../components/NewCategory';
import Tags from '../../components/Tags';

type HandleSlideInType = () => void;

type HandleSlideOutType = {
	(event: React.MouseEvent<HTMLDivElement>): void;
};

const Painel: React.FC = (): ReactElement => {
	const [isLogoAsideVisible, setLogoAsideVisible] = useState<boolean>(false);

	const asideMenuRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

	const handleSlideIn: HandleSlideInType = (): void => {
		setLogoAsideVisible(true);
		if (asideMenuRef.current)
			asideMenuRef.current.classList.add('slidePanel');
	}

	const handleSlideOut: HandleSlideOutType = (event: React.MouseEvent): void => {
		if(!event.currentTarget.contains(event.relatedTarget as Node)) {
			setLogoAsideVisible(false);
			asideMenuRef.current!.classList.remove('slidePanel');
		}
	}

	return (
		<Container>
			<Header>
				<Div className='divLeft'>
					<MenuIcon />
					<LogoIcon />
				</Div>
				<Div className='divRight'>
					<UserMenu />
				</Div>
			</Header>
			<Aside ref={asideMenuRef} onMouseOut={handleSlideOut} onMouseEnter={handleSlideIn}>
				<SlidePanelIndicator />
				{isLogoAsideVisible && <LogoAside />}
				<MenuAside isMenuSubMenuVisible={isLogoAsideVisible} />
			</Aside>
			<DivContent>
				<Main>
					<Routes>
						<Route path='/' element={<Dashboard />} />
						<Route path='/dashboard' element={<Dashboard />} />
            <Route path='posts' element={<Posts />} />
						<Route path='new-post' element={<NewPost />} />
						<Route path='new-category' element={<NewCategory />} />
						<Route path='tags' element={<Tags />} />
            <Route path='users' element={<Users />} />
						<Route path='new-user' element={<NewUser />} />
            <Route path='theme' element={<Theme />} />
            <Route path='settings' element={<Settings />} />
					</Routes>
				</Main>
			</DivContent>
		</Container>
	)
}

export default Painel;