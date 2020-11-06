import styled from "styled-components"
import Link from 'next/link'
import { MenuLink } from '../interfaces'

const Overlay = styled.div`
    width: 320px;
    display: block;
    float:right;
    background: #000;
`

const link: MenuLink[] = [
  {
    title: 'Home',
    href: '/'
  },
  {
    title: 'BMW',
    href: '/bmw'
  },
  {
    title: 'エンブレムの由来',
    href: '/emblem'
  },
  {
    title: '製品の特徴',
    href: '/features'
  },
  {
    title: '二輪車',
    href: '/motorcycle'
  },
  {
    title: 'モータースポーツ',
    href: '/sports'
  },
  {
    title: '経営状況',
    href: '/business'
  }
]

const LinkItem = styled.div`
  padding: 0 32px;
  font-family: YuGothic;
  font-size: 16px;
  font-weight: 200;
  height: 50px;
  line-height: 50px;
  a{
    text-decoration: none;
    color: #fff;
  }
  &::before{
    content: "";
    display: block;
    background-color: #fff;
    height: 1px;
    width: 100%;
  }
`


const MenuMain = () => (
  <Overlay>
    {
      link.map((item, index) => {
        return <LinkItem key={index} ><Link href={item.href}>{item.title}</Link></LinkItem>
      })
    }
  </Overlay>
)

export default MenuMain