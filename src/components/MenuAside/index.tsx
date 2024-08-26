import { ReactElement } from "react";
import { Container, Nav, Ul, Li, LinkMenu, NewPostIcon,
	UserIcon, IoIosSettingsIcon, DashboardIcon, AppearanceIcon } from "./styles";

const MenuAside: React.FC = (): ReactElement => {
	return (
		<Container>
			<Nav>
				<Ul>
					<Li>
						<DashboardIcon />
						<LinkMenu to="/panel/dashboard">Dashboard</LinkMenu>
					</Li>
					<Li>
						<NewPostIcon />
						<LinkMenu to="/panel/posts">Posts</LinkMenu>
					</Li>
					<Li>
						<UserIcon />
						<LinkMenu to="/panel/users">Usuários</LinkMenu>
					</Li>
					<Li>
						<AppearanceIcon />
						<LinkMenu to="/panel/theme">Tema</LinkMenu>
					</Li>
					<Li>
						<IoIosSettingsIcon />
						<LinkMenu to="/panel/settings">Configurações</LinkMenu>
					</Li>
				</Ul>
			</Nav>
		</Container>
	)
}

export default MenuAside;