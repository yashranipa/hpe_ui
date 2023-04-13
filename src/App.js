import React from "react";
// JSX
import AutoplayButtonSlider from "./components/AutoplayButtonSlider/AutoplayButtonSlider";
// import LivePlayer from "./components/LivePlayer/LivePlayer"
const app = () => {
  return (
    <div
      style={{
        color: "#FFF"
      }}
    >
      <AutoplayButtonSlider />
      {/* <LivePlayer /> */}
    </div>
  );
};

export default app;
