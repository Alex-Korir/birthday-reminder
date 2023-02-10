import React, { useState } from "react";
import "./styles.css";
import { data } from "./data.js";

export default function App() {
  const [people, setPeople] = useState(data);

  return (
    <div className="App">
      {people.map((items) => {
        const { id, name, age } = items;
        return (
          <div key={id} className="mousey">
            <h2>{name}</h2>
            <h2>{age}</h2>
          </div>
        );
      })}
    </div>
  );
}
