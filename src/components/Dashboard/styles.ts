import styled from "styled-components";
import { RiArrowDownSFill } from "react-icons/ri";

export const Container = styled.h1`
	width: 100%;
	max-width: 1190px;
	margin-top: 20px;
	padding: 0 10px;
`;

export const Title = styled.span`
	font: 1.2rem bahnschrift, sans-serif;
`;

export const DivBoxes = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 10px;
	margin: 15px auto;

	@media (max-width: 800px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: 530px) {
		grid-template-columns: 1fr;
	}
`;

export const Box = styled.div`
	width: 100%;
	max-width: 442px;
`;

export const HeaderBox = styled.div`
	border: 1px solid #C3C4C7;
	display: flex;
	align-items: center;
	background-color: #FFFFFF;
	padding: 0 5px 0 9px;
	justify-content: space-between;
`;

export const BodyBox = styled.div`
	background-color: #FFFFFF;
	padding: 15px;
	border: 1px solid #C3C4C7;
	overflow: hidden;
`;

export const TitleBox = styled.h3`
	font: 1rem bahnschrift, sans-serif;
`;

export const ControlBoxButton = styled(RiArrowDownSFill)`
	font-size: 1.8rem;
	cursor: pointer;
	color: #787C82;

	&.rotate {
		transform: rotate(180deg);
	}
`;

export const FormQuickDraft = styled.form`
	width: 100%;
`;

export const Bold = styled.b`
	color: red;
`;

export const WarnForm = styled.span`
	font: .9rem bahnschrift, sans-serif;
	margin-bottom: 8px;
	display: block;
	color: grey;
	text-align: center;
`;

export const Input = styled.input`
	display: block;
	outline: none;
	width: 100%;
	padding: 6px 0 6px 4px;
	font: .9rem bahnschrift, sans-serif;
	margin-bottom: 10px;
`;

export const TextArea = styled.textarea`
	outline: none;
	resize: none;
	width: 100%;
	height: 100px;
	font: .9rem bahnschrift, sans-serif;
	padding: 6px 0 6px 4px;
	margin-bottom: 10px;
`;

export const RecentDraftDiv = styled.div`
	margin-top: 15px;
`;

export const TitleRecentDraft = styled.h3`
	font: 1rem bahnschrift, sans-serif;
	margin-bottom: 7px;
`;

export const Ul = styled.ul`

`;

export const Li = styled.li`
	& + & {
		margin-top: 9px;
	}
`;

export const DateRecentDraft = styled.span`
	color: grey;
`;

export const ButtonSendQuickDraft = styled.button`
	display: block;
	font: .9rem bahnschrift, sans-serif;
	border: none;
	background-color: #135E96;
	color: white;
	padding: 8px 15px 7px 15px;
	cursor: pointer;
`;

export const LinkDraft = styled.a`
	text-decoration: none;
`;