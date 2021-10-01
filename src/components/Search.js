import React, { useState } from "react";

const Search = ({ getQuery }) => {
  const [text, setText] = useState("");

  const onChange = (q) => {
    setText(q);
    getQuery(q);
  };

  return (
    <section id="Search-bar">
      <form action="">
        <input
          type="text"
          className="form-control"
          placeholder="Search by name..."
          value={text}
          onChange={(e) => onChange(e.target.value)}
          // autoFocus
        />
      </form>
    </section>
  );
};

export default Search;
