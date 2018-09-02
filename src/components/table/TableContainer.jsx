import React, { Component } from 'react';
import styled from 'styled-components';

import matchSorter from 'match-sorter'
import ReactTable from 'react-table';

const Photo = styled.div`
	background-size: cover;
	background-position: center center;
	width: 20vw;
	height: 10vw;
`;

const StyledReactTable = styled(ReactTable)`

`

const columns = [
	{
		Header: 'Date',
		accessor: 'dates[0]' // String-based value accessors!
	},
	{
		Header: 'Name',
    accessor: 'name',
    filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["name"] }),
                  filterAll: true
	},
	{
		Header: 'Photo',
		accessor: 'coverPhoto',
		Cell: props => (
			<Photo
				style={{
					backgroundImage: `url(https://ucarecdn.com/${
						props.value
					}/-/resize/600/)`
				}}
			/>
		) 
	}
];

export class TableContainer extends Component {
	render() {
		return (
			<div>
				<StyledReactTable
					data={this.props.data}
					columns={columns}
					defaultPageSize={10}
					filterable
			
				/>
			</div>
		);
	}
}

export default TableContainer;
