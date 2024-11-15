import NoteCard from "./NoteCard";
import NewNote from "./NewNote";

export default function NotesList({ notes, handleAddNote, handleDeleteNote }) {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <NoteCard text={note.text} id={note.id} date={note.date} key={note.id} handleDeleteNote={handleDeleteNote} />
      ))}
      <NewNote handleAddNote={handleAddNote} />
    </div>
  );
}
