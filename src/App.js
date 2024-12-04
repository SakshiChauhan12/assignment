import React from "react";
import CardComponent from "./components/CardComponent";
import image1 from "./assets/img1.jpeg";
import image2 from "./assets/img2.jpeg";
import image3 from "./assets/img3.jpeg";
import err from "./assets/err.png";
import "./App.css";

const App = () => {
  const sampleImages = [
    { url: image1, ready: true, error: false },
    { url: image2, ready: true, error: false },
    { url: image3, ready: true, error: false },
    { url: err, ready: false, error: true },
  ];
 
  return (
    <div className="app"> 
      <CardComponent
        name="Explorin Academy"
        count={4}
        sampleImages={sampleImages}
      />
    </div>
  );
};

export default App;
