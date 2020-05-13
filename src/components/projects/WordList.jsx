import React from "react";
import WordItem from "./WordItem";

const WordList = ({ fetchedWords, onWordSelect }) => {
  const words = [
    ...fetchedWords,
    { word: "I" },
    { word: "my" },
    { word: "me" },
    { word: "You" },
    { word: "your" },
    { word: "She" },
    { word: "her" },
    { word: "He" },
    { word: "him" },
    { word: "his" },
    { word: "They" },
    { word: "them" },
    { word: "were" },
    { word: "was" },
    { word: "is" },
    { word: "are" },
    { word: "s" },
    { word: "es" },
    { word: "be" },
    { word: "ed" },
    { word: "ed" },
    { word: "have" },
    { word: "has" },
    { word: "had" },
    { word: "make" },
    { word: "made" },
  ];
  const renderedList = words.map((w, index) => (
    <WordItem key={index} word={w.word} onWordSelect={onWordSelect} />
  ));

  return <ul className="wordList">{renderedList}</ul>;
};
export default WordList;
