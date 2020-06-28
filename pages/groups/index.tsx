import * as React from "react";
import styled from "styled-components";
import Navigation from "../../components/Navigation";

const Container = styled.div`
  margin: 0;
  padding: 0;
`;

function Groups() {
  return (
    <Container>
      <Navigation title={"Groups"} />
      <div>Groups Page</div>
    </Container>
  );
}

export default Groups;
