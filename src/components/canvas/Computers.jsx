import React from "react";
import bgImage from "../../assets/rihana.jpg";
const ComputersCanvas = () => {
  return (
    <div className="flex justify-center ml-96 mb-6 items-center w-full h-full">
      <img
        src={bgImage}
        alt="Your Profile"
        className="w-[500px] h-[500px] rounded-full "
      />
    </div>
  );
};

export default ComputersCanvas;
