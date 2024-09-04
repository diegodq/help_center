import styled from "styled-components";
import { RiArrowDownSFill } from "react-icons/ri";

export const Container = styled.h1`
	width: 100%;
	max-width: 1190px;
	margin-top: 10px;
`;

export const Title = styled.span`
	font: 1.2rem bahnschrift, sans-serif;
`;

export const DivBoxes = styled.div`

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
`;

export const TitleBox = styled.h3`
	font: .9rem bahnschrift, sans-serif;
`;

export const ControlBoxButton = styled(RiArrowDownSFill)`
	font-size: 1.8rem;
	cursor: pointer;
	color: #787C82;
`;

export const FormQuickDraft = styled.form`
	width: 100%;
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

`;

export const TitleRecentDraft = styled.h3`

`;

export const Ul = styled.ul`

`;

export const Li = styled.li`

`;

export const DateRecentDraft = styled.span`

`;

export const ButtonSendQuickDraft = styled.button`
	display: block;
`;