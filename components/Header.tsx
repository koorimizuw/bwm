import { useState } from 'react';
import styled from "styled-components"
import MenuMain from '../components/Menu'

type Props = {
  divider?: boolean
}

const Main = styled.div`
    position: sticky;
    font-family: 'Verdana';
    font-weight: 600;
    background-color: #000;
    width: 100vw;
    height: 70px;
    display: flex;
    justify-content: space-between;
    color: #fff;
    line-height: 70px;
`

const LogoContainer = styled.div`
    font-size: 20px;
    margin: 0 24px;
    position: relative;
`

const Logo = styled.div`
  position: absolute;
  width: 250px;
`

const Menu = styled.div`
    text-align: right;
    font-size: 14px;
    margin: 0 20px;
    cursor: pointer;
    .fa{
      margin: 0 10px;
      &.fa-times{
        font-size: 20px;
      }
    }
`

const Divider = styled.div`
    height: 100%;
    width: 1px;
    background-color: #fff; 
    display: inline-block;
    position: absolute;
    right: 100px;
`

const Header = ({ divider = false }: Props) => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <Main>
      <LogoContainer>
        <Logo>BMW Fan!!!!!</Logo>
      </LogoContainer>
      <div>
        <Menu onClick={() => setShowMenu(!showMenu)}>
          {divider ? !showMenu ? <Divider /> : '' : ''}
          {!showMenu ? <span><i className="fa fa-bars" />Menu</span> : <i className="fa fa-times"></i>}</Menu>
        {showMenu ? <MenuMain /> : ''}
      </div>
    </Main>
  )
}

export default Header