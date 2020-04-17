import React from "react";

const SaveImage = ({ children, elementId }) => {
  return (
    <>
      <div id={elementId}>{children}</div>
    </>
  );
};

export default SaveImage;
