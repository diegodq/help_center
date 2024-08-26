import styled from "styled-components";

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

	&.divRight {

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
	/* width: 70px; */
	width: 220px;
	box-shadow: 0 5px 3px grey;

	@media (max-width: 991px) {
		display: none;
	}
`;

export const Main = styled.main`
	height: 100%;
`;