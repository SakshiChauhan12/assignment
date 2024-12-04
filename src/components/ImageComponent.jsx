import React from "react";
import "../styles/ImageComponent.css";

const ImageComponent = ({ src, alt }) => {
  return <img src={src} alt="image" className="circular-image" />;
};

export default ImageComponent;
