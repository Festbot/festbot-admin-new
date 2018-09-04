import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

import menu from '../components/menu/menuItems.js'


const MenuItemButton = styled(Link)`
padding:10px 20px;
background-color:#2c2c2c;
background-color:#6f8f8f;
color: #eee;
    text-decoration: none;
pointer:pointer ;
display:block;
margin:3px 2px;
font-size:1.2rem;
&:hover{
  background-color:#2f2f2f;
  background-color:#8fafaf;
}
`

export class MenuContainer extends Component {

  render() {
    const menuItems = menu.map(menu =>{
      return <MenuItemButton to={menu.link} key={menu.title}>{menu.title}</MenuItemButton>
    })
    return (
      <div>
        {menuItems}
      </div>
    )
  }
}

export default MenuContainer
