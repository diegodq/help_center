import styled from "styled-components";
import { RiLoader4Line } from "react-icons/ri";

export const Container = styled.h1`
	width: 100%;
	max-width: 1190px;
	margin: 20px auto;
	padding: 0 15px;
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
	display: inline-block;
	margin-top: 15px;

	&:hover {
		color: #6277e3;
	}
`;

export const Filters = styled.div`
	margin-top: 19px;
	display: flex;
	align-items: center;
	margin-bottom: 18px;

	@media (max-width: 543px) {
		flex-direction: column;
	}
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

export const DivAction = styled.div`
	height: 20px;
	display: flex;
	padding: 2px 0;
`;

export const ButtonAction = styled.button`
	border: none;
	background: none;
	font: .9rem bahnschrift, sans-serif;
	cursor: pointer;
	color: #135E96;
`;

export const InputFilter = styled.input`
	outline: none;
	padding: 5px 4px;
	font: .9rem bahnschrift, sans-serif;

	@media (max-width: 543px) {
		margin-top: 10px;
		width: 90%;
	}
`;

export const Bold = styled.b`
	color: black;
`;

export const TableMassActions = styled.div`

`;

export const Table = styled.table`
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

export const TD = styled.td`
	padding: 6px;
	font: 1rem bahnschrift, sans-serif;
	width: 25%;
	text-align: left;

	@media (max-width: 660px) {
		&.hide-on-mobile {
			display: none;
		}
	}
`;

export const TRBody = styled.tr`
	&:nth-child(2n+2) {
		background-color: white;
	}
`;

export const TDBody = styled.td`
	padding: 8px 0;
	font: 1rem bahnschrift, sans-serif;
	text-align: center;
`;

export const Checkbox = styled.input`
	margin-right: 7px;
`;

export const DivFiltersTable = styled.div`
	display: flex;
	margin-bottom: 15px;
	margin-top: 15px;
`;

export const DivFilterSelect = styled.div`
	display: flex;
	align-items: center;

	@media (max-width: 596px) {
		display: none;
	}
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
	display: none;

	&.showLoader {
		display: block;
	}
`;