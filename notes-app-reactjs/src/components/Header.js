export default function Header({ toggleMode }) {
  return (
    <div className="header-container">
      <h1>Notes</h1>
      <button className="btn-primary" onClick={() => toggleMode((currentMode) => !currentMode)}>
        Toggle Mode
      </button>
    </div>
  );
}
