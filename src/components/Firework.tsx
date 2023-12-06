import React, { useEffect } from "react";
import confetti from "canvas-confetti";
import { randomInt } from "crypto";

const Fireworks = () => {
  useEffect(() => {
    const triggerFireworks = () => {
      const duration = 3 * 1000;

      const config = {
        angle: 90,
        spread: 360,
        startVelocity: 40,
        elementCount: 70,
        dragFriction: 0.12,
        duration,
        stagger: 3,
        width: "10px",
        height: "10px",
        colors: ["#FF0000", "#00FF00", "#0000FF"], // Change colors as desired
      };

      // Trigger the confetti
      confetti({
        particleCount: 200,
        origin: { x: 0.5, y: 0.5 }, // Center of the screen
      });

      // Stop the fireworks after the specified duration
      setTimeout(() => {
        // firework.reset();
      }, duration);
    };

    triggerFireworks();
  }, []);

  return <div>Fireworks Displayed!</div>;
};

export default Fireworks;
