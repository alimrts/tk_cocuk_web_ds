import { useEffect, useRef } from "react";

export default function useJoystick() {
  const buttonMap = useRef({});

  useEffect(() => {
    const onTouchStart = (direction) => {
      buttonMap.current[direction] = true;
    };

    const onTouchEnd = (direction) => {
      buttonMap.current[direction] = false;
    };

    const directions = ["left", "right", "up", "down"];
    directions.forEach((direction) => {
      const onTouchStartHandler = () => onTouchStart(direction);
      const onTouchEndHandler = () => onTouchEnd(direction);
      document
        .getElementById(`${direction}ButtonNav`)
        .addEventListener("touchstart", onTouchStartHandler);
      document
        .getElementById(`${direction}ButtonNav`)
        .addEventListener("touchend", onTouchEndHandler);
      // Cleanup listeners on unmount
      return () => {
        document
          .getElementById(`${direction}ButtonNav`)
          .removeEventListener("touchstart", onTouchStartHandler);
        document
          .getElementById(`${direction}ButtonNav`)
          .removeEventListener("touchend", onTouchEndHandler);
      };
    });
  }, []);

  return buttonMap.current;
}
