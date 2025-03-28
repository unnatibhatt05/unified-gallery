import React from "react";
import BackButton from "../components/BackButton";
import "./Artworks.css";

const Art2 = () => {
  return (
    <>
     <BackButton />
    <div className="artworks-container">
      {/* 🔙 Back Button */}
     

      <section className="artworks-section">
             {/* 🎨 Title at the top */}
             <h2 className="artworks-title">Artwork 2</h2>
        <div className="artworks-content">
          {/* 🎨 Left Side: Image as Background */}
           <div
            className="artworks-image-card highlight-card"
            style={{ backgroundImage: `url('/art2.jpg')` }}
          ></div>

          {/* 📝 Right Side: Text Content */}
          <div className="artworks-text">
          
            <p>
            This drawing felt different from the start—more intense, more personal. I wanted to create an eye so realistic that it felt alive, as if it could see right through you. Every tiny detail mattered—the reflections in the iris, the soft shadows of the eyelid, the wet shine that made it look almost glassy. With each layer of shading, I felt like I was unlocking a deeper story hidden within the gaze.
            An eye is more than just an organ—it’s a universe of emotions. As I worked, I thought about what this eye had seen, what emotions it held. Was it filled with wonder? Sorrow? Curiosity? The beauty of this artwork lies in the mystery—every viewer will see something different reflected in its depths.
            </p>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Art2;
