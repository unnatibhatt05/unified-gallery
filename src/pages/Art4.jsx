import React from "react";
import BackButton from "../components/BackButton";
import "./Artworks.css";

const Art4 = () => {
  return (
    <>
     <BackButton />
    <div className="artworks-container">
    

      <section className="artworks-section">
             {/* 🎨 Title at the top */}
             <h2 className="artworks-title">Artwork 4</h2>
        <div className="artworks-content">
          {/* 🎨 Left Side: Image as Background */}
           <div
            className="artworks-image-card highlight-card"
            style={{ backgroundImage: `url('/art4.jpg')` }}
          ></div>

          {/* 📝 Right Side: Text Content */}
          <div className="artworks-text">

            <p>
            There’s something magical about painting a rose—it’s delicate, yet it carries so much meaning. As I carefully layered the soft pink hues, I realized how much patience this artwork required. Every petal had to be shaped just right, curving naturally to create depth and realism. I found myself lost in the details, mesmerized by how a simple flower could hold such elegance.
            But beyond its beauty, this rose became a reflection of time. Roses bloom and wither, reminding us that beauty is fleeting yet timeless in memory. When I finally completed the piece, it wasn’t just a flower—it was a moment, frozen in time, waiting to be admired forever.
            </p>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Art4;
