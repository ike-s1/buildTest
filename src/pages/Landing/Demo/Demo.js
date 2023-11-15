import React, { useEffect, useState } from "react";
import "./Demo.scss";
import blueWave from "../../../resources/decour/blue-wave.svg";
import blueWaveMobile from "../../../resources/decour/blue-wave-mobile.svg";

export const Demo = () => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    setWindowWidth(window.innerWidth);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  let imageUrl = '';
  if (windowWidth < 768) {
    imageUrl = blueWaveMobile
  } else {
    imageUrl = blueWave
  }

  return (
    <section id="demo" className="demo-section">
      <div className="demo-content">
        <h4 className="demo-title title">Video Demo</h4>
        <p className="demo-subtitle">
          With those simple steps shown in a video, you can create your own chat
          bot sourced with your data.
        </p>
        <div className="demo-video"></div>
      </div>
      <img
        className="blue-wave"
        src={imageUrl}
        alt="wave"
      />
    </section>
  );
};
