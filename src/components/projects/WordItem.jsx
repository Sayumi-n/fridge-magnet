import React from "react";
const WordItem = ({ word, onWordSelect }) => {
  return (
    <li className="wordItem" onDoubleClick={() => onWordSelect(word)}>
      <span className="wordSpan">{word}</span>
    </li>
  );
};

export default WordItem;
