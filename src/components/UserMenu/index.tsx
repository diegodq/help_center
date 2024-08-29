import React, { ReactElement, RefObject, useRef } from "react";
import { NameUser, TypeUser, UserImg, ChevronDownIcon, Ul, Li,
	LinkScreen, ContainerMenu, DataUser, MenuHide, Nav
 } from "./styles";

 type HandleShowUserMenu = () => void;

 type HandleHideUserMenu = () => void;

const UserMenu: React.FC = (): ReactElement => {
	const hideMenuRef: RefObject<HTMLDivElement> = useRef(null);

	const handleShowUserMenu: HandleShowUserMenu = (): void => {
		if (hideMenuRef.current)
			hideMenuRef.current.classList.add('showUserMenuHide');
	}

	const handleHideUserMenu: HandleHideUserMenu = (): void => {
		if (hideMenuRef.current)
			hideMenuRef.current.classList.remove('showUserMenuHide');
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
						<Li><LinkScreen to="/panel/settings">Configurações</LinkScreen></Li>
						<Li><LinkScreen to="/logout">Sair</LinkScreen></Li>
					</Ul>
				</Nav>
			</MenuHide>
		</ContainerMenu>
	)
}

export default UserMenu;