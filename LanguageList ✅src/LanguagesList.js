import { useState } from "react";

function LanguagesList() {
  const [langues, setLangues] = useState(["JS", "HTML", "PHP"]);
  const [newLng, setNewLng] = useState("");
  const onInputChange = (e) => {
    setNewLng(e.target.value);
  };
  const addLng = (e) => {
    setLangues([...langues, newLng]);
  };
  return (
    <div>
      <ul>
        {langues.map((lng, index) => (
          <li key={index}>{lng}</li>
        ))}
      </ul>
      <input type="text" value={newLng} onChange={onInputChange} />
      <button onClick={addLng}>Ajouter</button>
    </div>
  );
}

export default LanguagesList;
