import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8000";

export const fetchNotes = async () => {
  const response = await axios.get(`${API_URL}/notes`);
  return response.data;
};

export const addNote = async (title: string, description: string) => {
  const response = await axios.post(`${API_URL}/notes`, { title, description });
  return response.data;
};

export const deleteNote = async (noteId: string) => {
  const response = await axios.delete(`${API_URL}/notes/${noteId}`);
  return response.data;
};
