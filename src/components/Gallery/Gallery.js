import React from "react";

import "./Gallery.css";
import sampleImage from "../../style/img/showcase.jpg";

function Gallery() {
  return (
    <div className="container">
      <h1 className="text-center gallery__hero mt-5">Gallery</h1>
      <div className="row">
        <div className="col-md-4 mt-4">
          <img
            src={sampleImage}
            alt="BSS Gallery Image"
            className="gallery__image"
          />
        </div>
        <div className="col-md-4 mt-4">
          <img
            src={sampleImage}
            alt="BSS Gallery Image"
            className="gallery__image"
          />
        </div>
        <div className="col-md-4 mt-4">
          <img
            src={sampleImage}
            alt="BSS Gallery Image"
            className="gallery__image"
          />
        </div>
        <div className="col-md-4 mt-4">
          <img
            src={sampleImage}
            alt="BSS Gallery Image"
            className="gallery__image"
          />
        </div>
        <div className="col-md-4 mt-4">
          <img
            src={sampleImage}
            alt="BSS Gallery Image"
            className="gallery__image"
          />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
