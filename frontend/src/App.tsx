import React from "react";
import AddNote from "./components/AddNote";
import NotesList from "./components/NotesList";
import { Container, Typography } from "@mui/material";

const App: React.FC = () => {
  return (
    <Container>
      <Typography maxWidth="lg" variant="h3" gutterBottom sx={{ mb: 3 }} paddingLeft={3} paddingTop={2}>
        CRUD App
      </Typography>
      <AddNote />
      <NotesList />
    </Container>
  );
};

export default App;
