import * as React from "react";
import styled from "styled-components";
import Navigation from "../components/Navigation";

const Container = styled.div`
  margin: 0;
  padding: 0;
`;

function SecondPage() {
  return (
    <Container>
      <Navigation title={"SecondPage"} />
      <div>Sencond Page</div>
    </Container>
  );
}

export default SecondPage;
