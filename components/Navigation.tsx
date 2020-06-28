import * as React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styled from 'styled-components';

interface props {
  title: string
}

const Container = styled.div`
  width: 100%;
`;

const Nav =styled.ul`
  padding: 10px 15px;
  margin: 0;
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const NavItems = styled.li`
  padding-right: 15px;
`;

const Navigation = ({title}: props) => {
  return (
    <Container>
      <Head><title>{title}</title></Head>
      <Nav>
        <NavItems>
          <Link href="/">Home</Link>
        </NavItems>
        <NavItems>
          <Link href="/secondPage">SecondPage</Link>
        </NavItems>
        <NavItems>
          <Link href="/groups">Groups</Link>
        </NavItems>
      </Nav>
    </Container>
  )
};

export default Navigation;