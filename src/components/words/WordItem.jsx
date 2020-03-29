import React from "react";

const WordItem = ({ word, onWordSelect }) => {
  return (
    <div className="wordItem col col-lg-0.5" onClick={() => onWordSelect(word)}>
      <span className="wordSpan">{word}</span>
    </div>
  );
};

export default WordItem;
