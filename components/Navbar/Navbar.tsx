import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

type Props = {};

const Navbar = (props: Props) => {
  return (
    <NavbarWrapper>
      <Nav>
        <Logo>
          <h1>Ninja List</h1>
        </Logo>
        <Link href="/">
          <a>HOME</a>
        </Link>
        <Link href="/about">
          <a>ABOUT</a>
        </Link>
        <Link href="/ninjas">
          <a>NINJA LISTING</a>
        </Link>
      </Nav>
    </NavbarWrapper>
  );
};

const NavbarWrapper = styled.div`
  /* background-color: silver; */
  /* height: 50px; */
  /* padding: 32px; */
  margin: 10px auto 40px;
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
`;

const Nav = styled.nav`
  display: flex;
  gap: 32px;
  height: 100%;
  align-items: center;
  font-size: 1.5rem;
`;

const Logo = styled.div`
  font-size: 2rem;
`;

export default Navbar;
