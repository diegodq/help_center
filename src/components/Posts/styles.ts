import styled from "styled-components";
import { RiLoader4Line } from "react-icons/ri";

export const Container = styled.h1`
	width: 100%;
	max-width: 1190px;
	margin-top: 10px;
`;

export const DivTitle = styled.div`
	display: flex;
	align-items: center;
`;

export const H1 = styled.h1`
	font: 1.3rem bahnschrift, sans-serif;
	margin-right: 10px;
`;

export const NewPostButton = styled.a`
	background-color: #f7f7f7;
	border: 1px solid #c4dbff;
	padding: 5px 15px;
	border-radius: 2px;
	font: 1rem bahnschrift, sans-serif;
	cursor: pointer;

	&:hover {
		color: #6277e3;
	}
`;

export const Filters = styled.div`
	margin-top: 19px;
	display: flex;
	align-items: center;
	margin-bottom: 18px;
`;

export const LinkFilter = styled.a`
	margin-left: 10px;
	text-decoration: none;
	font: .9rem bahnschrift, sans-serif;
	background: none;
	border: none;
`;

export const Div = styled.div`
	display: flex;
	margin-right: 10px;
`;

export const InputFilter = styled.input`
	outline: none;
	padding: 5px 4px;
	font: .9rem bahnschrift, sans-serif;
`;

export const Bold = styled.b`
	color: black;
`;

export const TableMassActions = styled.div`

`;

export const Table = styled.table`
	border: 1px solid red;
	border-collapse: collapse;
	width: 100%;
	table-layout: fixed;
`;

export const THeader = styled.thead`

`;

export const TFooter = styled.tfoot`

`;

export const TBody = styled.tbody`

`;

export const TR = styled.tr`
	border: 1px solid #e6e6e6;
	background-color: #FFFFFF;
`;

export const TH = styled.th`
	font: 1rem bahnschrift, sans-serif;
	padding: 6px;
	width: 25%;
	text-align: left;
`;

export const Checkbox = styled.input`

`;

export const TD = styled.td`
	padding: 6px;
	font: 1rem bahnschrift, sans-serif;
	width: 25%;
	text-align: left;
`;

export const DivFiltersTable = styled.div`
	display: flex;
	margin-bottom: 15px;
	margin-top: 15px;
`;

export const DivFilterSelect = styled.div`
	display: flex;
	align-items: center;
`;

export const SelectMassOption = styled.select`
	height: 30px;
`;

export const MassOptions = styled.option`

`;

export const MassApplyButton = styled.button`
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

export const DivMassOption = styled.div`
	margin-right: 18px;
`;

export const SelectDate = styled.select`
	height: 30px;
`;

export const OptionDate = styled.option`

`;

export const SelectCategories = styled.select`
	margin-left: 9px;
	height: 30px;
`;

export const OptionCategories = styled.option`

`;

export const ButtonFilters = styled.button`
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