import React, { useState } from "react";

import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const [dbValue, saveToDb] = useState(""); // would be an API call normally

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <main>
      <h1>Blog</h1>
      <textarea value={value} onChange={handleChange} rows={5} cols={50} />
      <section className="panels">
        <div>
          <h2>Editor (Client)</h2>
          {value}
        </div>
        <div>
          <h2>Saved (DB)</h2>
          {dbValue}
        </div>
      </section>
    </main>
  );
}

export default App;
