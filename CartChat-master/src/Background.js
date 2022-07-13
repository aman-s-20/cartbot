import React, { useEffect } from "react";
import Thpace from "thpace";

const Background = ({ props, children }) => {
  useEffect(() => {
    const canvas = document.querySelector("#make-me-cool");
    console.log(canvas);
    const settings = {
      colors: ["#6b969b", "#6b969b", "#7431a7"],
      triangleSize: 90,
      bleed: 120,
      noise: 60,
      pointVariationX: 20,
      pointVariationY: 35,
      pointAnimationSpeed: 7500,
      animationOffset: 250,
      particleSettings: {
        count: [1, 5],
        interval: [500, 5000],
        radius: [0, 2],
        opacity: [0.1, 0.5],
        variationX: [0, 10],
        variationY: [0, 5],
        color: "#e6c6ff",
      },
    };
    Thpace.create(canvas, settings);
  }, []);

  return (
    <canvas
      id="make-me-cool"
      className="finisher-header"
      style={{ height: "100vh", width: "100vw" }}
    >
      {children}
    </canvas>
  );
};

export default Background;
