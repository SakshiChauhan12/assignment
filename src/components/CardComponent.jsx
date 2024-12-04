import React from "react";
import ImageComponent from "./ImageComponent";
import "../styles/CardComponent.css";



const CardComponent = ({name,count,sampleImages}) => {
  
  //extracting the images from the sampleImages array
 
  

  return (
    <div className="card-container">
     
     <div className="image-section">
      {sampleImages.map((image, index) => (
        <div key={index} className="image-wrapper">
          {image.ready ? (
            <ImageComponent src={image.url} alt={`image ${index + 1}`} />
          ) : (
            <>
              <ImageComponent src={sampleImages[3].url} alt={`image ${index + 1}`} />
           
            </>
          )}
        </div>
      ))}
    </div>

     
      <div className="text-section">
        <h1 className="title">Explorin Academy</h1>
        <p className="subtitle">3+ offline centers</p>
      </div>

   
      <div className="icon-section">
    <img src={sampleImages[3].url} className="error-icon"></img>
      </div>
    </div>
  );
};

export default CardComponent;
