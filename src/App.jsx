import React from "react";
import { Button } from "./components/UI/Button";
import { Container, Icon, styled } from "@mui/material";

const App = () => {
  return (
    <Container>
      <Button variant="outlined">BUTTON</Button>

      <Button variant="contained">Button</Button>
      <Button variant="warning">BUTTON</Button>
    </Container>
  );
};

export default App;
