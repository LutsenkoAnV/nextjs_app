import Link from 'next/link';
import styled from 'styled-components';
import { FC } from 'react';

const HeaderContainer = styled.div`
  height: 100px;
  padding-top: 20px;
  padding-left: 20px;
  background-color: #090a0b;
`;

const NavItem = styled.a`
  font-size: 30px;
  font-weight: bold;
  margin-right: 15px;
  color: #fff;
  text-decoration: none;
  cursor: pointer;
`;

const Header: FC = () => (
  <HeaderContainer>
    <Link href="/">
      <NavItem>Home</NavItem>
    </Link>
    <Link href="/about">
      <NavItem>About</NavItem>
    </Link>
  </HeaderContainer>
);

export default Header;