import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../../store/store.js';
import styled from 'styled-components';
import HamburgerMenuButton from './HamburgerMenuButton.jsx';
import { UPDATE_MENU_VISIBILITY } from '../../store/actions/actionTypes.js';

const HeaderBar = styled.div`
	width: 100%;
	position:absolute;
	z-index:1;
	background-color: rgb(70, 70, 140);
	background-color: #4f4f8f;
	color: #eee;
	display: flex;
	height:45px;
`;

const HeaderTitle = styled.div`
	display: inline-block;
	padding: 4px 15px;
	font-size:1.6rem;
`;

export class Header extends Component {
	menuClickedHandler = e => {
		this.props.updateMenuVisibility(e);
	};

	render() {
		return (
			<HeaderBar>
				<HamburgerMenuButton clicked={this.menuClickedHandler} />
				<HeaderTitle>Festbot Admin</HeaderTitle>
			</HeaderBar>
		);
	}
}

export default connect(
	null,
	{
		updateMenuVisibility: e =>
			store.dispatch({ type: UPDATE_MENU_VISIBILITY, payload: e })
	}
)(Header);
