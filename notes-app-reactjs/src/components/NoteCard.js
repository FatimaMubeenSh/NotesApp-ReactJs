import { MdDelete } from "react-icons/md";

export default function NoteCard({ text, id, date, handleDeleteNote }) {
  return (
    <div className="note-container" id={`note_${id}`}>
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <MdDelete className="btn-delete" onClick={() => handleDeleteNote(id)} />
      </div>
    </div>
  );
}
