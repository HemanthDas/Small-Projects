import React, { useState } from "react";
import List from "./list";

function Home() {
  const [list, setList] = useState(["Hemanth"]);
  const [content, setContent] = useState("");

  return (
    <div className="container">
      <div className="top">
        <input
          type="text"
          placeholder="Enter your work"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button
          onClick={() => {
            setList((prevList) => [...prevList, content]);
            setContent("");
          }}
        >
          +
        </button>
      </div>
      <List
        arr={list}
        onDelete={(index) => {
          setList((prevList) => prevList.filter((_, i) => i !== index));
        }}
      />
    </div>
  );
}

export default Home;
