import React, { Component } from 'react'
import styled from 'styled-components'

const Button = styled.div`

display:inline-block;
padding:10px 15px;
cursor: pointer;
  width: 30px; 
  height: 25px;

  
  i {
    background-color: #fff;
    border-radius: 2px;
    content: '';
    display: block;
    width: 100%;
    height: 4px;
  }
  i:nth-child(1) {
    -webkit-animation:outT 0.8s backwards;
    animation:outT 0.8s backwards;
    -webkit-animation-direction:reverse;
    animation-direction:reverse;
  }
  i:nth-child(2) {
    margin: 5px 0;
    -webkit-animation: outM 0.8s backwards;
    animation:outM 0.8s backwards;
    -webkit-animation-direction:reverse;
    animation-direction:reverse;
  }
  i:nth-child(3) {
    -webkit-animation:outBtm 0.8s backwards;
    animation:outBtm 0.8s backwards;
    -webkit-animation-direction:reverse;
    animation-direction:reverse;
  }
  
}
@-webkit-keyframes inM{
50%{-webkit-transform:rotate(0deg);}
100%{-webkit-transform:rotate(45deg);}
}
@keyframes inM{
50%{transform:rotate(0deg);}
100%{transform:rotate(45deg);}
}

@-webkit-keyframes outM{
50%{-webkit-transform:rotate(0deg);}
100%{-webkit-transform:rotate(45deg);}
}
@keyframes outM{
50%{transform:rotate(0deg);}
100%{transform:rotate(45deg);}
}

@-webkit-keyframes inT{
0%{-webkit-transform: translateY(0px) rotate(0deg);}
50%{-webkit-transform: translateY(9px) rotate(0deg);}
100%{-webkit-transform: translateY(9px) rotate(135deg);}
}
@keyframes inT{
0%{transform: translateY(0px) rotate(0deg);}
50%{transform: translateY(9px) rotate(0deg);}
100%{transform: translateY(9px) rotate(135deg);}
}

@-webkit-keyframes outT{
0%{-webkit-transform: translateY(0px) rotate(0deg);}
50%{-webkit-transform: translateY(9px) rotate(0deg);}
100%{-webkit-transform: translateY(9px) rotate(135deg);}
}
@keyframes outT{
0%{transform: translateY(0px) rotate(0deg);}
50%{transform: translateY(9px) rotate(0deg);}
100%{transform: translateY(9px) rotate(135deg);}
}

@-webkit-keyframes inBtm{
0%{-webkit-transform: translateY(0px) rotate(0deg);}
50%{-webkit-transform: translateY(-9px) rotate(0deg);}
100%{-webkit-transform: translateY(-9px) rotate(135deg);}
}
@keyframes inBtm{
0%{transform: translateY(0px) rotate(0deg);}
50%{transform: translateY(-9px) rotate(0deg);}
100%{transform: translateY(-9px) rotate(135deg);}
}

@-webkit-keyframes outBtm{
0%{-webkit-transform: translateY(0px) rotate(0deg);}
50%{-webkit-transform: translateY(-9px) rotate(0deg);}
100%{-webkit-transform: translateY(-9px) rotate(135deg);}
}
@keyframes outBtm{
0%{transform: translateY(0px) rotate(0deg);}
50%{transform: translateY(-9px) rotate(0deg);}
100%{transform: translateY(-9px) rotate(135deg);}
}
`

const ActiveButton = styled(Button)`
  i:nth-child(1) {
    -webkit-animation:inT 0.8s forwards;
    animation:inT 0.8s forwards;
  }
  i:nth-child(2) {
    -webkit-animation:inM 0.8s forwards;
    animation:inM 0.8s forwards;
  }
  i:nth-child(3) {
    -webkit-animation:inBtm 0.8s forwards;
    animation:inBtm 0.8s forwards;
  }

`


export class HamburgerMenuButton extends Component {
  state={
    active:true
  }

  clickHandler=()=>{
    this.props.clicked(!this.state.active)
    this.setState({active: !this.state.active})
    
  }


  render() {
    const MenuButton = this.state.active? ActiveButton:Button;

    return (
      <MenuButton active={this.state.active} onClick={this.clickHandler}>
      <i/><i/><i/>
      </MenuButton>
    )
  }
}

export default HamburgerMenuButton
