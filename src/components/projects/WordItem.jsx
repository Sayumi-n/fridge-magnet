import React from "react";
import LongPressHandler from "../layout/LongPressHandler";

const WordItem = ({ word, onWordSelect }) => {
  // const longPress = LongPressHandler(LongPressHandler, 500);

  return (
    <li
      className="wordItem"
      onDoubleClick={() => onWordSelect(word)}
      // {...longPress}
    >
      <span className="wordSpan noTextHighLight">{word}</span>
    </li>
  );
};

export default WordItem;
