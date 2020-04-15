import React from "react";

const SaveImage = ({ children, elementId, onClick }) => {
  return (
    <>
      <button onClick={() => onClick()}>PDFをダウンロードする</button>
      <div id={elementId}>{children}</div>
    </>
  );
};

export default SaveImage;
