import React, { useState, useCallback, useRef, useEffect } from "react";
import debounce from "lodash.debounce";

import "./App.css";

function useDebounce(callback, delay) {
  const debouncedFn = useCallback(
    debounce((...args) => callback(...args), delay),
    [delay] // will recreate if delay changes
  );
  return debouncedFn;
}

function useDebounceAlt(callback, delay) {
  const memoizedCallback = useCallback(callback, []);
  const debouncedFn = useRef(debounce(memoizedCallback, delay));

  useEffect(() => {
    debouncedFn.current = debounce(memoizedCallback, delay);
  }, [memoizedCallback, debouncedFn, delay]);

  return debouncedFn.current;
}

function App() {
  const [value, setValue] = useState("");
  const [dbValue, saveToDb] = useState(""); // would be an API call normally

  const debouncedSave = useDebounce((nextValue) => saveToDb(nextValue), 1000);

  const handleChange = (event) => {
    const { value: nextValue } = event.target;
    setValue(nextValue);
    debouncedSave(nextValue);
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
