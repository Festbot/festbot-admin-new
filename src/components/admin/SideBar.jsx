import React, { Component } from 'react'
import styled from 'styled-components'

import MenuContainer from '../../containers/MenuContainer.jsx'

const Container = styled.div`
position:absolute;
left:-200px
color:#eee;
background-color:#5c5c5c;
transition: all 0.3s ease-in;
width:200px;
height:100%;

`


 class SideBar extends Component {
  render() {
    return (
      <Container showMenu={this.props.menuIsActive}>
      
      <MenuContainer/>
      </Container>
    )
  }
}


export default SideBar;