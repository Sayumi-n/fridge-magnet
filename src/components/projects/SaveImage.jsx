import React from "react";

function SaveImage({ children, elementId }) {
  return (
    <>
      <div id={elementId}>{children}</div>
    </>
  );
}

export default SaveImage;
