import React from "react";
import WordItem from "./WordItem";

const WordList = ({ words, onWordSelect }) => {
  const renderedList = words.map(word => {
    return <WordItem key={word} word={word} onWordSelect={onWordSelect} />;
  });

  return <div className="container">{renderedList}</div>;
};

export default WordList;
