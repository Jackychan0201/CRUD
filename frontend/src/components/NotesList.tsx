import React, { useEffect } from "react";
import { useAtom } from "jotai";
import { notesAtom } from "../atoms";
import { fetchNotes } from "../api";
import NoteItem from "./NoteItem";
import { 
  CircularProgress, 
  Container, 
  Grid, 
  Typography,
  Paper
} from "@mui/material";

const NotesList: React.FC = () => {
  const [notes, setNotes] = useAtom(notesAtom);

  useEffect(() => {
    const loadNotes = async () => {
      const notesData = await fetchNotes();
      setNotes(notesData);
    };

    loadNotes();
  }, [setNotes]);

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 4 }}>
        My notes
      </Typography>
      
      {notes.length === 0 ? (
        <Paper 
          elevation={0} 
          sx={{ 
            p: 4, 
            display: 'flex', 
            justifyContent: 'center',
            backgroundColor: 'transparent'
          }}
        >
          {notes === null ? (
            <CircularProgress />
          ) : (
            <Typography variant="body1" color="text.secondary">
              No notes found
            </Typography>
          )}
        </Paper>
      ) : (
        <Grid container spacing={3}>
          {notes.map((note: {id: string; title: string; description: string }) => (
              <NoteItem
                key={String(note.id)}
                id={String(note.id)}
                title={note.title}
                description={note.description}
                refreshNotes={() => fetchNotes().then(setNotes)}
              />
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default NotesList;