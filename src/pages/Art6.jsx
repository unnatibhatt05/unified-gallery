import React from "react";
import "./Artworks.css";
import BackButton from "../components/BackButton";

const Art6 = () => {
  return (
    <>
     <BackButton />
    <div className="artworks-container">

      <section className="artworks-section">
             {/* 🎨 Title at the top */}
             <h2 className="artworks-title">Artwork 6</h2>
        <div className="artworks-content">
          {/* 🎨 Left Side: Image as Background Card */}
           <div
            className="artworks-image-card highlight-card"
            style={{ backgroundImage: `url('/art6.jpg')` }}
          ></div>

          {/* 📝 Right Side: Text Content */}
          <div className="artworks-text">
           
            <p>
            Painting Lord Shiva felt different from any other artwork I’ve created—it felt powerful, almost spiritual. As I started with the outlines, I focused on his tranquil yet commanding presence, ensuring that every stroke reflected both his strength and his serenity. The third eye was a challenge; it had to hold a sense of divine wisdom, a force that sees beyond the physical world.
            As the sketch neared completion, I felt an overwhelming sense of peace. The flowing locks, the crescent moon, and the sacred rudraksha beads all came together in harmony. This artwork became more than just a drawing—it became a tribute to Shiva’s eternal energy, a reminder that within destruction, there is also renewal.
            </p>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Art6;
