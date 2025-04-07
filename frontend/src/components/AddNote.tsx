import React, { useState } from "react";
import { Button, TextField, Container, Box } from "@mui/material";
import { fetchNotes, addNote } from "../api";
import { useAtom } from "jotai";
import { notesAtom } from "../atoms";

const AddNote: React.FC = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [, setNotes] = useAtom(notesAtom);

  const handleAddNote = async () => {
    if (loading) return; 
    if (title && description) {
      setLoading(true); 
      try {
        await addNote(title, description);
        const newNotes = await fetchNotes();
        setNotes(newNotes);
        setTitle("");
        setDescription("");
      } finally {
        setLoading(false); 
      }
    }
  };
  

  return (
    <Container>
      <Box>
        <TextField
          sx={{mb: 3}}
          variant="outlined"
          fullWidth
          placeholder="Task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
        sx={{mb: 3}}
          variant="outlined"
          fullWidth
          placeholder="Task description"
          multiline
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button onClick={handleAddNote} disabled={loading} variant="contained" color="primary" sx={{mb: 3}}>
          {loading ? "Adding..." : "Add Note"}
        </Button>
      </Box>
    </Container>
  );
};

export default AddNote;
