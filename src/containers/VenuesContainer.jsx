import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components'

import { initVenues } from '../store/actions';

import TableContainer from '../components/table/TableContainer.jsx'

const Container = styled.div`
position:relative;


`

export class VenuesContainer extends Component {
	componentDidMount() {
		this.props.initVenues();
	}

	render() {
    return <Container>Venues List
    {this.props.venuesData&&<TableContainer data={this.props.venuesData}/>}
    </Container>;
	}
}


const mapStateToProps = ({ venues }) => {
	return {
		venuesData: venues.venuesData
	};
};

const mapDispatchToProps = dispatch => {
	return {
		initVenues: () => dispatch(initVenues())
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(VenuesContainer);
