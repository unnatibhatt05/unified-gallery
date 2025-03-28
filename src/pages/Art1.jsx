import React from "react";
import BackButton from "../components/BackButton";
import "./Artworks.css";

const Art1 = () => {
  return (
    <>
     <BackButton />
    <div className="artworks-container">
 

      <section className="artworks-section">
             {/* 🎨 Title at the top */}
             <h2 className="artworks-title">Artwork 5</h2>
        <div className="artworks-content">
          {/* 🎨 Left Side: Image as Background */}
           <div
            className="artworks-image-card highlight-card"
            style={{ backgroundImage: `url('/art1.jpg')` }}
          ></div>

          {/* 📝 Right Side: Text Content */}
          <div className="artworks-text">
            <p>
            Creating Shri Krishna’s painting was an experience beyond art—it felt like a spiritual journey. From the moment I placed the first stroke, I knew this piece had to capture more than just his image; it had to reflect his divine essence. His flute, his gentle yet knowing smile, and the radiant aura surrounding him—each element had to be perfect.
            As I painted, I felt a deep connection to the emotions his presence evoked—peace, love, and an overwhelming sense of devotion. His flute isn’t just an instrument; it’s a call to the soul, a melody that transcends time. When I completed the artwork, it wasn’t just a painting—it was a feeling, one that fills the heart with serenity and devotion.
            </p>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Art1;
