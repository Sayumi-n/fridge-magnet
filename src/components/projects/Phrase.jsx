import React from "react";

const Phrase = ({ word }) => {
  if (!word) {
    return (
      <div className="phrase">
        <p>Your Haiku Here...</p>
        <p>Double click to pass the words</p>
        <p>(Long press on your mobile)</p>
      </div>
    );
  }

  const userPhrase = word.map((w, index) => (
    <div key={index} className="phrase-item-margin">
      <span className="phrase-item noTextHighLight">{w}</span>
    </div>
  ));

  return <div className="flex-container phrase">{userPhrase}</div>;
};

export default Phrase;
