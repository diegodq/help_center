import React, { ReactElement } from "react";
import { Div, NameUser, TypeUser, UserImg, ChevronDownIcon, Ul, Li,
	LinkScreen
 } from "./styles";

const UserMenu: React.FC = (): ReactElement => {
	return (
		<Div className="containerMenu">
			<Div className="dataUser">
				<NameUser>Diego Sousa</NameUser>
				<TypeUser><ChevronDownIcon />Admin</TypeUser>
			</Div>

			<UserImg src="" />

			<Div className="menuHide">
				<Ul>
					<Li><LinkScreen to="/panel/settings">Configurações</LinkScreen></Li>
					<Li><LinkScreen to="/logout">Sair</LinkScreen></Li>
				</Ul>
			</Div>
		</Div>
	)
}

export default UserMenu;