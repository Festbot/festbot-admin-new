import React, { Component } from 'react';
import styled from 'styled-components';

import matchSorter from 'match-sorter';
import CreateTable from './CreateTable.jsx';

const Photo = styled.div`
	background-size: cover;
	background-position: center center;
  height: 10vw;
  width:20vw;
	display: flex;
	margin: 0 auto;
`;

const columns = [
	{
		Header: 'Start Date',
    accessor: 'dates',
    Cell: props => (
      props.value[0]
    )
	},
	{
		Header: 'Name',
		accessor: 'name',
		filterMethod: (filter, rows) =>
			matchSorter(rows, filter.value, { keys: ['name'] }),
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
	clickHandler = e => {
		console.log(e);
	};
	render() {
		return (
			<div>
				<CreateTable
					data={this.props.data}
					columns={columns}
          defaultPageSize={10}
          
				/>
				
			</div>
		);
	}
}

export default TableContainer;
