import React from "react";

const WordItem = ({ word, onWordSelect }) => {
  return (
    <li className="wordItem" onClick={() => onWordSelect(word)}>
      <span className="wordSpan noTextHighLight">{word}</span>
    </li>
  );
};

export default WordItem;
