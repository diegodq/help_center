import styled from 'styled-components';
import { RiLoader4Line } from "react-icons/ri";

export const Container = styled.h1`
	width: 100%;
	max-width: 1190px;
	margin-top: 10px;
`;

export const Title = styled.span`
	font: 1.3rem bahnschrift, sans-serif;
	margin-right: 10px;
`;

export const Form = styled.form`
	margin-top: 15px;
`;

export const Bold = styled.b`
	color: red;
`;

export const WarnForm = styled.span`
	font: .9rem bahnschrift, sans-serif;
	margin-bottom: 8px;
	display: block;
	color: grey;
`;

export const AddCategoriesDiv = styled.div`

`;

export const TitleDivCategory = styled.h2`
	font: 1rem bahnschrift, sans-serif;
	margin-top: 15px;
`;

export const Input = styled.input`
	outline: none;
	height: 25px;
	font: .9rem bahnschrift, sans-serif;
	padding-left: 6px;

	${({type}) => type === 'text' && `
		width: 500px;
	`}


	${({type}) => type === 'submit' && `
		color: white;
		background-color: #135E96;
		border: none;
		padding: 0 17px;
		height: 34px;
		cursor: pointer;
		margin-top: 15px;
	`}
`;

export const Div = styled.div`
	& + & {
		margin-top: 14px;
	}
`;

export const Text = styled.p`
	font: .9rem bahnschrift, sans-serif;
	margin-top: 8px;
`;

export const TableDiv = styled.div`
	margin-top: 30px;
`;

export const Table = styled.table`
	border-collapse: collapse;
	width: 80%;
	table-layout: fixed;
`;

export const THead = styled.thead`

`;

export const TR = styled.tr`
		border: 1px solid #e6e6e6;
		background-color: #FFFFFF;
`;

export const TH = styled.th`
	text-align: lef;
	width: 25%;
	padding: 6px;
`;

export const TD = styled.td`
	font: 1rem bahnschrift, sans-serif;
	padding: 6px;
	width: 25%;
	text-align: left;
`;

export const TBody = styled.tbody`

`;

export const TFooter = styled.tfoot`

`;

export const Checkbox = styled.input`

`;

export const DivFilters = styled.div`
	margin: 10px 0 10px 0;
	display: flex;
	align-items: center;
`;

export const SelectFilter = styled.select`
	height: 30px;
`;

export const OptionFilter = styled.option`

`;

export const ApplyButtonFilter = styled.button`
	margin-left: 8px;
	border: none;
	background-color: #f7f7f7;
	border: 1px solid #c4dbff;
	padding: 8px 10px;
	font: .9rem bahnschrift, sans-serif;
	cursor: pointer;

	&:hover {
		color: #6277e3;
	}
`;

export const LoadingSpinner = styled(RiLoader4Line)`
	color: blue;
	font-size: 1.4rem;
	margin-left: 5px;
`;
