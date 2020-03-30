import React from "react";
import WordItem from "./WordItem";

const WordList = ({ words, onWordSelect }) => {
  const renderedList = words.map((w, index) => (
    <WordItem key={index} word={w.word} onWordSelect={onWordSelect} />
  ));
  return (
    <div className="user-info">
      <ul>{renderedList}</ul>
    </div>
  );
};
export default WordList;
