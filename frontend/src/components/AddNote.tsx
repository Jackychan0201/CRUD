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
        const createdAt = new Date().toISOString()
        await addNote(title, description, createdAt);
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
          placeholder="Task title(up to 30 characters)"
          value={title}
          slotProps={{
            htmlInput: { minLength: 1, maxLength: 30 },
          }}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
        sx={{mb: 3}}
          variant="outlined"
          fullWidth
          placeholder="Task description(up to 100 characters)"
          multiline
          rows={4}
          value={description}
          slotProps={{
            htmlInput: {minLength: 1, maxLength: 100},
          }}
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
