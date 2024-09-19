import React from "react";
import { Container, Typography, Button } from "@mui/material";

function App() {
  return (
    <Container>
      <Typography variant="h2" align="center" gutterBottom>
        AI-Powered Fitness Routine Builder
      </Typography>
      <Typography variant="body1" align="center" paragraph>
        Start building your custom workout routines based on your fitness goals,
        skill level, and available equipment.
      </Typography>
      <Button variant="contained" color="primary" fullwidth>
        Get Started
      </Button>
    </Container>
  );
}

export default App;
