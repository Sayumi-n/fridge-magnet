import React from "react";

const Phrase = ({ word }) => {
  if (!word) {
    return (
      <div className="">
        <p>Your Phrase Here...</p>
        <p>Double click or drag & drop</p>
      </div>
    );
  }

  const userPhrase = word.map((w, index) => (
    <div key={index} className="phrase-item-margin">
      <span className="phrase-item">{w}</span>
    </div>
  ));

  return <div className="flex-container phrase">{userPhrase}</div>;
};

export default Phrase;
