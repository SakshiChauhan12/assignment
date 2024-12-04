import React, { useState } from "react";
import ImageComponent from "./ImageComponent";
import "../styles/CardComponent.css";

const CardComponent = ({ name, count, sampleImages }) => {
  const [error, setError] = useState(false);

  // Check and set error state if any image is not ready
  const handleImageError = () => {
    if (!error) {
      setError(true);
    }
  };

  return (
    <div className="card-container">
      {/* Image Section */}
      <div className="image-section">
        {sampleImages.map((image, index) => (
          <div key={index} className="image-wrapper">
            {image.ready ? (
              <ImageComponent src={image.url} alt={`Image ${index + 1}`} />
            ) : (
              <>
                <ImageComponent
                  src={sampleImages[3]?.url} // Default image
                  alt={`Image ${index + 1}`}
                />
                {handleImageError()}
              </>
            )}

            {/* Tooltip */}
            <div className="tooltip">
              <p>Status: {image.ready ? "Ready" : "Not Ready"}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Text Section */}
      <div className="text-section">
        <h1 className="title">{name || "Explorin Academy"}</h1>
        <p className="subtitle">{count ? `${count}+ offline centers` : "3+ offline centers"}</p>
      </div>

      {/* Error Icon Section */}
      {error && (
        <div className="icon-section">
          <img
            src={sampleImages[3]?.url}
            alt="Error icon"
            className="error-icon"
          />
        </div>
      )}
    </div>
  );
};

export default CardComponent;
