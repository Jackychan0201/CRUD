import React from "react";
import { Button, Card, CardContent, Typography, CardActions, Divider } from "@mui/material";
import { deleteNote } from "../api";

interface NoteProps {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  refreshNotes: () => void;
}

const NoteItem: React.FC<NoteProps> = ({ id, title, description, createdAt, refreshNotes }) => {
  const handleDelete = async () => {
    await deleteNote(id);
    refreshNotes();
  };

  return (
    <Card 
      sx={{ marginBottom: 3, boxShadow: 3,
        '&:hover': {
          boxShadow: 6,
          transition: 'box-shadow 0.3s ease-in-out'
        }
      }}
    >
      <CardContent>
        <Typography variant="h5" component="h2" gutterBottom>
          {title}
        </Typography>
        <Divider sx={{ my: 1 }} />
        <Typography 
          variant="body1" 
          color="text.secondary"
          sx={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}
        >
          {description}
        </Typography>
        <Divider sx={{ my: 1 }} />
        <Typography 
          variant="body1" 
          color="text.secondary"
          sx={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}
        >
          Created at: {createdAt}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'flex-end', p: 2 }}>
        <Button 
          variant="outlined" 
          color="error" 
          onClick={handleDelete}
          size="small"
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default NoteItem;