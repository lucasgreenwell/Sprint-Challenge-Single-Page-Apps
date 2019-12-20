import React from "react";
import {Link} from 'react-router-dom';
import styled from 'styled-components';

export default function Header() {
  
  const Nav = styled.nav`
    display: flex;
    justify-content: space-around;
    font-size: 2rem;
  `;

  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <Nav>
        <Link to='/characters'>Characters</Link>
        <Link to='/locations'>Locations</Link>
        <Link to='/episodes'>Episodes</Link>
        <Link to='/'>Home</Link>
      </Nav>
    </header>
  );
}
