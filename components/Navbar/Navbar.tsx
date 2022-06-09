import React from 'react';
import styled from 'styled-components';

type Props = {};

const Navbar = (props: Props) => {
  return (
    <NavbarWrapper>
      <nav>
        <div>
          <h1>ninja list</h1>
        </div>
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Ninja Listing</a>
      </nav>
    </NavbarWrapper>
  );
};

const NavbarWrapper = styled.div`
  background-color: silver;
`;

export default Navbar;
