import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

type Props = {};

const Navbar = (props: Props) => {
  const router = useRouter();

  return (
    <NavbarWrapper>
      <Nav>
        <LogoWrapper>
          <Image
            onClick={() => router.push('/')}
            src="/logo.png"
            width={128}
            height={77}
          />
        </LogoWrapper>
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

const LogoWrapper = styled.div`
  font-size: 2rem;
  height: 100%;
`;

const ImageLogo = styled.img`
  /* object-fit: contain; */
  /* height: 77px; */
  width: 128px;
  object-position: -40px 300%;
`;

export default Navbar;
