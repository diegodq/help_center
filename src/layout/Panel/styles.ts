import styled from 'styled-components';
import { BsChevronDoubleRight } from 'react-icons/bs';

export const Container = styled.div`

`;

export const Header = styled.header`
	width: 100%;
	position: sticky;
	height: 57px;
	z-index: 1;
	background-color: white;
	box-shadow: 5px 0 3px grey;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 22px;
`;

export const Div = styled.div`
	&.divLeft {
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

export const DivContent = styled.div`

`;

export const Aside = styled.aside`
	background-color: white;
	z-index: 2;
	position: fixed;
	top: 0;
	bottom: 0;
	width: 65px;
	transition: .2s;
	box-shadow: 0 5px 3px grey;

	&.slidePanel {
		width: 190px;
	}

	@media (max-width: 991px) {
		display: none;
	}
`;

export const Main = styled.main`
	height: 100%;
`;

export const SlidePanelIndicator = styled(BsChevronDoubleRight)`
	position: fixed;
	top: 30px;
	left: 16px;
	font-size: 1.4rem;
`;