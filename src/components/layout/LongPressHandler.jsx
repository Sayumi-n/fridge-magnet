import { useState, useEffect } from "react";

export default function LongPressHandler(callback = () => {}, ms = 300) {
  const [startHoldPress, setStartHoldPress] = useState(false);

  useEffect(() => {
    let timerId;
    if (startHoldPress) {
      timerId = setInterval(callback, ms);
    } else {
      clearTimeout(timerId);
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [startHoldPress]);

  return {
    onMouseDown: () => setStartHoldPress(true),
    onMouseUp: () => setStartHoldPress(false),
    onMouseLeave: () => setStartHoldPress(false),
    onTouchStart: () => setStartHoldPress(true),
    onTouchEnd: () => setStartHoldPress(false),
  };
}
