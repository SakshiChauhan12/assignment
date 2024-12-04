import React from "react";
import CardComponent from "./components/CardComponent";
import image1 from "./assets/img1.jpeg";
import image2 from "./assets/img2.jpeg";
import image3 from "./assets/img3.jpeg";

const App = () => {
  const sampleImages = [
    { url: image1, ready: true, error: false },
    { url: image2, ready: true, error: false },
    { url: image3, ready: true, error: false },
    { url: "https://via.placeholder.com/150", ready: false, error: true },
  ];
  const appStyles = {
    fontFamily: "'Roboto', sans-serif",
    backgroundColor: "#f5f5f5",
    display: "flex",
    justifyContent: "center", // Centers horizontally
    alignItems: "center", // Centers vertically
    height: "100vh",
    


    
  
  };

  return (
    <div>
      <CardComponent
        name="Explorin Academy"
        count={4}
        images={sampleImages}
      />
    </div>
  );
};

export default App;
