import React, { Component } from 'react';
import { connect } from 'react-redux'

import styled from 'styled-components';
import Header from '../components/admin/Header.jsx';
import SideBar from '../components/admin/SideBar.jsx';

const mapStateToProps = ({ ui }) => {
	return {
		menuIsActive: ui.menuIsActive
	};
};

const MainContainer = connect(mapStateToProps)(styled.div`
	width: 100vw;
	background-color: #aaa;
	display: flex;
	height:100%;
	min-height:100vh;
	transition: all 0.3s ease-out;
	transform: translateX(${props=>props.menuIsActive?'200px':'0'});
`);

const Content = styled.div`
	background-color: #ddd;
    width: 100%;
	padding-top:45px;
`;

export class AdminContainer extends Component {
	render() {
		return (
			<div>
				<Header />
				<MainContainer >
					<SideBar />
					<Content>{this.props.children}</Content>
				</MainContainer>
			</div>
		);
	}
}




export default AdminContainer
