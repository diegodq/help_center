import React, { ReactElement, useState, useRef, RefObject } from 'react';
import { Container, Nav, Ul, Li, LinkMenu, NewPostIcon,
	UserIcon, IoIosSettingsIcon, DashboardIcon, AppearanceIcon,
	PostsSubMenu, UsersSubMenu, UlSubMenu, LiSubMenu} from './styles';

type HandleShowSubMenu = () => void;

type MenuAsideProps = {
	isMenuSubMenuVisible: boolean;
}

const MenuAside: React.FC<MenuAsideProps> = ({ isMenuSubMenuVisible }: MenuAsideProps): ReactElement => {
	const [toggleSubMenuPosts, setToggleSubMenu]= useState<boolean>(true);
	const [toggleSubMenuUsers, setToggleSubMenuUsers] = useState<boolean>(true);

	const postSubMenuRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
	const usersSubMenuRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

	const handlePostSubMenu: HandleShowSubMenu = (): void => {
		setToggleSubMenu(!toggleSubMenuPosts);
		if (toggleSubMenuPosts)
			postSubMenuRef.current!.classList.add('togglePostSubMenu');
		else
			postSubMenuRef.current!.classList.remove('togglePostSubMenu');
	}

	const handleUsersSubMenu: HandleShowSubMenu = (): void => {
		setToggleSubMenuUsers(!toggleSubMenuUsers);
		if(toggleSubMenuUsers)
			usersSubMenuRef.current!.classList.add('toggleUsersSubmenu');
		else
			usersSubMenuRef.current!.classList.remove('toggleUsersSubmenu');
	}

	return (
		<Container>
			<Nav>
				<Ul>
					<Li>
						<DashboardIcon />
						{isMenuSubMenuVisible && (<LinkMenu to='/panel/dashboard'>Dashboard</LinkMenu>)}
					</Li>
					<Li>
						<NewPostIcon />
						{isMenuSubMenuVisible && (<LinkMenu onClick={handlePostSubMenu} to='/panel/posts'>Posts</LinkMenu>)}
					</Li>
					{isMenuSubMenuVisible && (
						<PostsSubMenu ref={postSubMenuRef}>
							<UlSubMenu>
								<LiSubMenu className='subMenuLi'><LinkMenu to='/panel/new-post'>Novo Post</LinkMenu></LiSubMenu>
								<LiSubMenu className='subMenuLi'><LinkMenu to='/panel/new-category'>Categorias</LinkMenu></LiSubMenu>
								<LiSubMenu className='subMenuLi'><LinkMenu to='/panel/tags'>Tags</LinkMenu></LiSubMenu>
							</UlSubMenu>
						</PostsSubMenu>
					)}
					<Li>
						<UserIcon />
						{isMenuSubMenuVisible && (<LinkMenu onClick={handleUsersSubMenu} to='/panel/users'>Usuários</LinkMenu>)}
					</Li>
					{isMenuSubMenuVisible && (
						<UsersSubMenu ref={usersSubMenuRef}>
							<UlSubMenu>
								<LiSubMenu className='subMenuLi'><LinkMenu to='/panel/new-user'>Novo Usuário</LinkMenu></LiSubMenu>
							</UlSubMenu>
						</UsersSubMenu>
					)}
					<Li>
						<AppearanceIcon />
						{isMenuSubMenuVisible && (<LinkMenu to='/panel/theme'>Tema</LinkMenu>)}
					</Li>
					<Li>
						<IoIosSettingsIcon />
						{isMenuSubMenuVisible && (<LinkMenu to='/panel/settings'>Configurações</LinkMenu>)}
					</Li>
				</Ul>
			</Nav>
		</Container>
	)
}

export default MenuAside;