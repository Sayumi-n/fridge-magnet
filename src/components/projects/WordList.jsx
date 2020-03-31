import React from "react";
import WordItem from "./WordItem";

const WordList = ({ words, onWordSelect }) => {
  const renderedList = words.map((w, index) => (
    <WordItem key={index} word={w.word} onWordSelect={onWordSelect} />
  ));

  return <ul className="wordList">{renderedList}</ul>;
};
export default WordList;
