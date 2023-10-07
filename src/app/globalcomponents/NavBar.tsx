"use client";

import styled from "styled-components";

const Navbar = styled.nav`
  position: fixed; //necessary to make the page beneathe centered
  height: 80px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2rem;
  align-items: center;
  background-color: none;
  color: white;
  z-index: 10;
`;

const Link = styled.a`
  color: white;
  text-decoration: none;
  padding: 15px 20px;
  display: flex;
  align-items: center; 
  justify-content: center;
  background-color: #0000005b;
  backdrop-filter: blur(5px); 
  border-radius: 0.3rem;
  cursor: pointer;
  width: 5rem;
`;

const NavbarComponent = () => {
  return (
    <Navbar>
      <Link href="#">BOOKINGS</Link>
      <Link href="#">CALENDAR</Link>
      <Link href="#">ARTISTS</Link>
      <Link href="#">MAIL</Link>
    </Navbar>
  );
};

export default NavbarComponent;
