import React from "react";

const WordItem = ({ word, onWordSelect }) => {
  // const longPress = LongPressHandler(LongPressHandler, 500);

  return (
    <li
      className="wordItem"
      onClick={() => onWordSelect(word)}
      // {...longPress}
    >
      <span className="wordSpan noTextHighLight">{word}</span>
    </li>
  );
};

export default WordItem;
