import React from "react";
import BackButton from "../components/BackButton";
import "./Artworks.css";

const Art5 = () => {
  return (
    <>
     <BackButton />
    <div className="artworks-container">
      <section className="artworks-section">
           {/* 🎨 Title at the top */}
           <h2 className="artworks-title">Artwork 5</h2>
        <div className="artworks-content">
          {/* 🎨 Left Side: Image as Background Card */}
           <div
            className="artworks-image-card highlight-card"
            style={{ backgroundImage: `url('/art5.jpg')` }}
          ></div>

          {/* 📝 Right Side: Text Content */}
          <div className="artworks-text">
         
            <p>
            When I first started this portrait, I wasn’t just drawing a face—I was capturing a feeling. With every stroke, I imagined a girl who carries a thousand emotions in her eyes. She isn’t just looking at the viewer; she’s telling a silent story, one that only those who truly observe can understand. As I shaded the delicate features, I wondered—was she lost in thought, dreaming of the future, or reminiscing about something long gone?
            Finishing this piece felt like watching a person come to life. The shadows and highlights played together to create depth, making her expression even more mysterious. It was a journey of patience and precision, but also one of connection. In the end, she became more than just a portrait—she became a soul on paper, waiting for someone to truly see her.
            </p>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Art5;
