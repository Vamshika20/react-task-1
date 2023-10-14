import React, { useState } from "react";

const WordCounter = () => {
  const [text, setText] = useState("");
  const wordCount = text.split(/\s/).filter(word => word !== "").length;

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="word-counter-container">
      <div className="white-box">
        <h1>Paragraph word counter</h1>
        <textarea
          rows="5"
          placeholder="Enter your paragraph here..."
          value={text}
          onChange={handleTextChange}
        ></textarea>
       <p></p>
        <div className="word-count">Word Count: {wordCount}</div>
      </div>
    </div>
  );
};

export default WordCounter;