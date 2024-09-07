import React, { ReactElement, RefObject, useRef } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { NameUser, TypeUser, UserImg, ChevronDownIcon, Ul, Li,
	LinkScreen, ContainerMenu, DataUser, MenuHide, Nav, LogOut
 } from './styles';

 type HandleShowUserMenu = () => void;

 type HandleHideUserMenu = () => void;

 type HandleLogOutUser = () => void;

const UserMenu: React.FC = (): ReactElement => {
	const navigate: NavigateFunction = useNavigate();
	const hideMenuRef: RefObject<HTMLDivElement> = useRef(null);

	const handleShowUserMenu: HandleShowUserMenu = (): void => {
		if (hideMenuRef.current)
			hideMenuRef.current.classList.add('showUserMenuHide');
	}

	const handleHideUserMenu: HandleHideUserMenu = (): void => {
		if (hideMenuRef.current)
			hideMenuRef.current.classList.remove('showUserMenuHide');
	}

	const handleLogOutUser: HandleLogOutUser = (): void => {
		window.localStorage.removeItem('authToken');
		navigate('/login');
	}

	return (
		<ContainerMenu>
			<DataUser onClick={handleShowUserMenu}>
				<NameUser>Diego Sousa</NameUser>
				<TypeUser><ChevronDownIcon />Admin</TypeUser>
			</DataUser>

			<UserImg src="" />

			<MenuHide ref={hideMenuRef} onMouseLeave={handleHideUserMenu}>
				<Nav>
					<Ul>
						<Li><LinkScreen to='/panel/settings'>Configurações</LinkScreen></Li>
						<Li><LogOut onClick={handleLogOutUser}>Sair</LogOut></Li>
					</Ul>
				</Nav>
			</MenuHide>
		</ContainerMenu>
	)
}

export default UserMenu;