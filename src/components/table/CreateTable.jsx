import React, { Component } from 'react';
import styled from 'styled-components';

const Row = styled.tr`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin: 1px;
`;

const TData = styled.td`
	padding: 10px;
	background-color: #e6e6e6;
	width: 100%;
	display: flex;
	align-items: center;
	margin: 0 1px;
`;

const Th = styled.th`
	padding: 10px;
	background-color: #ccc;
	color: #333;
	width: 100%;

	text-align: center;
	margin: 0 1px;
	font-weight: bold;
`;

const TBody = styled.tbody`
	display: flex;
	flex-direction: column;
`;

const Table = styled.table`
	width: 100%;
`;

export class CreateTable extends Component {
	render() {
		const renderHeader = this.props.columns.map(column => {
			return <Th key={column.accessor}>{column.Header}</Th>;
		});
		
		const renderTable = this.props.data.map(field => {
			const renderRow = this.props.columns.map(column => {
				return (
					<TData key={column.accessor} styles={this.props.style}>
						{column.Cell
							? column.Cell({ value: field[column.accessor] })
							: field[column.accessor]}
					</TData>
				);
			});
			return <Row key={field._id}>{renderRow}</Row>;
		});

		return (
			<Table>
				<Row>{renderHeader}</Row>
				<TBody>{renderTable}</TBody>
			</Table>
		);
	}
}

export default CreateTable;
