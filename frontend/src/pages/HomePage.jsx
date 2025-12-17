import { useState, useEffect } from "react";
import Navbar from "../components/Navbar.jsx";
import RateLimited from "../components/RateLimited.jsx";
import NoteCard from "../components/NoteCard.jsx";
import toast from "react-hot-toast";
import api from "../libs/axios.js";
import NotesNotFound from "../components/NotesNotFound.jsx";

const HomePage = () => {
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await api.get("/notes");
        console.log("API response:", res.data);

        if (Array.isArray(res.data)) {
          setNotes(res.data);
        } else if (Array.isArray(res.data.notes)) {
          setNotes(res.data.notes);
        } else {
          setNotes([]);
        }

        setIsRateLimited(false);
      } catch (error) {
        console.error("Error fetching notes", error);
        if (error.response?.status === 429) {
          setIsRateLimited(true);
        } else {
          toast.error("Failed to load notes");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchNotes();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />

      {isRateLimited && <RateLimited />}

      <div className="max-w-7xl mx-auto p-4 mt-6">
        {loading && (
          <div className="text-center text-primary py-10">Loading notes...</div>
        )}

        {notes.length === 0 && !isRateLimited && <NotesNotFound />}

        {Array.isArray(notes) && notes.length > 0 && !isRateLimited && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {notes.map((note) => (
              <NoteCard key={note._id} note={note} setNotes={setNotes} />
            ))}
          </div>
        )}

        {!loading && notes.length === 0 && !isRateLimited && (
          <p className="text-center text-gray-500">No notes available</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
