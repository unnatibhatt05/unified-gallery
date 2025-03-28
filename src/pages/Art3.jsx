import React from "react";
import BackButton from "../components/BackButton";
import "./Artworks.css";

const Art3 = () => {
  return (
    <>
     <BackButton />
    <div className="artworks-container">
    

      <section className="artworks-section">
             {/* 🎨 Title at the top */}
             <h2 className="artworks-title">Artwork 3</h2>
        <div className="artworks-content">
          {/* 🎨 Left Side: Image as Background */}
           <div
            className="artworks-image-card highlight-card"
            style={{ backgroundImage: `url('/art3.jpg')` }}
          ></div>

          {/* 📝 Right Side: Text Content */}
          <div className="artworks-text">

            <p>
            This piece was pure joy to create! I wanted to draw something that radiated warmth, innocence, and happiness, and what could be better than a cute teddy bear surrounded by sunflowers? As I worked on the soft, plush texture of the bear, I imagined it as the kind of companion that brings comfort—just like the childhood teddies we never wanted to part with.
            The sunflowers in the background added a vibrant contrast, symbolizing happiness and sunshine. With every detail, from the tiny stitches on the bear’s fur to the delicate petals of the flowers, I wanted to create something that made people smile. When I finally stepped back, it felt like a hug in the form of an artwork—soft, warm, and full of love.
            </p>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Art3;
