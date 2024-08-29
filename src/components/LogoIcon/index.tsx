import React, { ReactElement } from "react";
import { ImgLogo, Link } from "./styles";

const iconLogo = '/images/favicon.svg';

const LogoIcon: React.FC = (): ReactElement => {
	return (
		<Link href="/painel">
			<ImgLogo src={iconLogo} height="35" />
		</Link>
	)
}

export default LogoIcon;