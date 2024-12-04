import React from "react";
import ImageComponent from "./ImageComponent";
import "../styles/CardComponent.css";
import img1 from "../assets/img1.jpeg";
import img2 from "../assets/img2.jpeg";
import img3 from "../assets/img3.jpeg";
import err from "../assets/err.png";


const CardComponent = () => {
  const sampleImages = [img1, img2, img3,err]; 

  return (
    <div className="card-container">
     
      <div className="image-section">
        {sampleImages.map((img, index) => (
          <ImageComponent key={index} src={img} alt={`Image ${index + 1}`} />
        ))}
      </div>

     
      <div className="text-section">
        <h1 className="title">Explorin Academy</h1>
        <p className="subtitle">3+ offline centers</p>
      </div>

   
      <div className="icon-section">
        <div className="alert-icon">!</div>
      </div>
    </div>
  );
};

export default CardComponent;
