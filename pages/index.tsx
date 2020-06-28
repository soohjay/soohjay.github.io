import React from "react";
import styled from "styled-components";
import Navigation from "../components/Navigation";

const Container = styled.div`
  margin: 0;
  padding: 0;
`;
function Home() {
  return (
    <Container>
      <Navigation title={"Welcome"} />
    </Container>
  );
}

export default Home;
