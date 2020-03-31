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
    <div className="phrase-item-margin">
      <span key={index} className="phrase-item">
        {w}
      </span>
    </div>
  ));
  return <div className="flex-container">{userPhrase}</div>;
};

export default Phrase;
