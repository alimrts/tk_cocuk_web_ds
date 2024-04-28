// import React from "react";
// import "./JoystickButtons.css";

// import useZustandStore from "../../zustandStore";

// import leftButtonImage from "./joystick_ui/left_arrow.png";
// import rightButtonImage from "./joystick_ui/right_arrow.png";
// import upButtonImage from "./joystick_ui/up_arrow.png";
// import downButtonImage from "./joystick_ui/down_arrow.png";

// const JoystickButtons = () => {
//   const setIsLeftButtonPressed = useZustandStore(
//     (state) => state.setIsLeftButtonPressed
//   );

//   const setIsRightButtonPressed = useZustandStore(
//     (state) => state.setIsRightButtonPressed
//   );

//   const setIsUpButtonPressed = useZustandStore(
//     (state) => state.setIsUpButtonPressed
//   );

//   const setIsDownButtonPressed = useZustandStore(
//     (state) => state.setIsDownButtonPressed
//   );

//   const handleLeftButtonClick = () => {
//     setIsLeftButtonPressed(true);
//   };
//   const handleLeftButtonRelease = () => {
//     setIsLeftButtonPressed(false);
//   };

//   const handleRightButtonClick = () => {
//     setIsRightButtonPressed(true);
//   };
//   const handleRightButtonRelease = () => {
//     setIsRightButtonPressed(false);
//   };

//   const handleUpButtonClick = () => {
//     setIsUpButtonPressed(true);
//   };
//   const handleUpButtonRelease = () => {
//     setIsUpButtonPressed(false);
//   };

//   const handleDownButtonClick = () => {
//     setIsDownButtonPressed(true);
//   };
//   const handleDownButtonRelease = () => {
//     setIsDownButtonPressed(false);
//   };

//   /////

//   return (
//     <div className="joystick-buttons">
//       <button
//         className="leftButtonNav"
//         // onMouseDown={handleLeftButtonClick}
//         // onMouseUp={handleLeftButtonRelease}
//         onTouchStart={handleLeftButtonClick}
//         onTouchEnd={handleLeftButtonRelease}
//         style={{
//           backgroundImage: `url(${leftButtonImage})`,
//           backgroundRepeat: "no-repeat",
//           backgroundSize: "cover",
//         }}
//       ></button>
//       <button
//         className="rightButtonNav"
//         // onMouseDown={handleRightButtonClick}
//         // onMouseUp={handleRightButtonRelease}
//         onTouchStart={handleRightButtonClick}
//         onTouchEnd={handleRightButtonRelease}
//         style={{
//           backgroundImage: `url(${rightButtonImage})`,
//           backgroundRepeat: "no-repeat",
//           backgroundSize: "cover",
//         }}
//       ></button>

//       <button
//         className="upButtonNav"
//         // onMouseDown={handleUpButtonClick}
//         // onMouseUp={handleUpButtonRelease}
//         onTouchStart={handleUpButtonClick}
//         onTouchEnd={handleUpButtonRelease}
//         style={{
//           backgroundImage: `url(${upButtonImage})`,
//           backgroundRepeat: "no-repeat",
//           backgroundSize: "cover",
//         }}
//       ></button>

//       <button
//         className="downButtonNav"
//         // onMouseDown={handleDownButtonClick}
//         // onMouseUp={handleDownButtonRelease}
//         onTouchStart={handleDownButtonClick}
//         onTouchEnd={handleDownButtonRelease}
//         style={{
//           backgroundImage: `url(${downButtonImage})`,
//           backgroundRepeat: "no-repeat",
//           backgroundSize: "cover",
//         }}
//       ></button>
//     </div>
//   );
// };

// export default JoystickButtons;

import React from "react";
import "./JoystickButtons.css";

import useZustandStore from "../../zustandStore";

import leftButtonImage from "./joystick_ui/left_arrow.png";
import rightButtonImage from "./joystick_ui/right_arrow.png";
import upButtonImage from "./joystick_ui/up_arrow.png";
import downButtonImage from "./joystick_ui/down_arrow.png";

const JoystickButtons = () => {
  const setIsLeftButtonPressed = useZustandStore(
    (state) => state.setIsLeftButtonPressed
  );

  const setIsRightButtonPressed = useZustandStore(
    (state) => state.setIsRightButtonPressed
  );

  const setIsUpButtonPressed = useZustandStore(
    (state) => state.setIsUpButtonPressed
  );

  const setIsDownButtonPressed = useZustandStore(
    (state) => state.setIsDownButtonPressed
  );

  const handleTouchMove = (direction, isPressed) => {
    switch (direction) {
      case "left":
        setIsLeftButtonPressed(isPressed);
        break;
      case "right":
        setIsRightButtonPressed(isPressed);
        break;
      case "up":
        setIsUpButtonPressed(isPressed);
        break;
      case "down":
        setIsDownButtonPressed(isPressed);
        break;
      default:
        break;
    }
  };

  const handleTouchStart = (direction) => {
    handleTouchMove(direction, true);
  };

  const handleTouchEnd = (direction) => {
    handleTouchMove(direction, false);
  };

  const throttle = (func, delay) => {
    let lastCalled = 0;
    return function (...args) {
      const now = new Date().getTime();
      if (now - lastCalled < delay) {
        return;
      }
      lastCalled = now;
      func(...args);
    };
  };

  const throttledTouchStart = React.useMemo(
    () => throttle(handleTouchStart, 200),
    [handleTouchStart] // Include handleTouchStart as a dependency
  );
  const throttledTouchEnd = React.useMemo(
    () => throttle(handleTouchEnd, 200),
    [handleTouchEnd] // Include handleTouchEnd as a dependency
  );

  return (
    <div className="joystick-buttons">
      <button
        className="leftButtonNav"
        onTouchStart={() => throttledTouchStart("left")}
        onTouchEnd={() => throttledTouchEnd("left")}
        style={{
          backgroundImage: `url(${leftButtonImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></button>
      <button
        className="rightButtonNav"
        onTouchStart={() => throttledTouchStart("right")}
        onTouchEnd={() => throttledTouchEnd("right")}
        style={{
          backgroundImage: `url(${rightButtonImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></button>

      <button
        className="upButtonNav"
        onTouchStart={() => throttledTouchStart("up")}
        onTouchEnd={() => throttledTouchEnd("up")}
        style={{
          backgroundImage: `url(${upButtonImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></button>

      <button
        className="downButtonNav"
        onTouchStart={() => throttledTouchStart("down")}
        onTouchEnd={() => throttledTouchEnd("down")}
        style={{
          backgroundImage: `url(${downButtonImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></button>
    </div>
  );
};

export default JoystickButtons;
