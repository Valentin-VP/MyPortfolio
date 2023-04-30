import React from "react";
import Navbar from "../Navbar/Navbar";

const Wrapper = (props) => {
  const { children } = props;
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default Wrapper;
