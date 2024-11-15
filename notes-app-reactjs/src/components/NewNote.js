import { useState } from "react";

export default function NewNote({ handleAddNote }) {
  const [noteText, setNoteText] = useState("");
  const textCharLimit = 200;

  const handleChange = (event) => {
    if (event.target.value.length <= 200) {
      setNoteText(event.target.value);
    }
  };

  const handleSave = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText("");
    }
  };

  return (
    <div className="note-container new-note">
      <textarea cols={10} rows={8} placeholder="Add new Note" onChange={handleChange} value={noteText}></textarea>
      <div className="note-footer">
        <small>{textCharLimit - noteText.length} remaining</small>
        <button className="btn-primary" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
}
