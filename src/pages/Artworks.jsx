import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import "./Artworks.css";

const artworks = [
  { id: 1, title: "Krishna's Divine Portrait", images: ["/art1.jpg"] },
  { id: 2, title: "The Mystical Eye", images: ["/art2.jpg"] },
  { id: 3, title: "Teddy in Sunflowers", images: ["/art3.jpg"] },
  { id: 4, title: "Rose in Bloom", images: ["/art4.jpg"] },
  { id: 5, title: "Portrait Study", images: ["/art5.jpg"] },
  { id: 6, title: "Abstract Composition", images: ["/art6.jpg"] }
];

const Artwork = () => {
  const { id } = useParams(); // Get the artwork ID from URL
  const artwork = artworks.find((art) => art.id === parseInt(id));

  if (!artwork) {
    return (
      <div className="error-message">
        <Navbar />
        <h2>Artwork not found!</h2>
        <Footer />
      </div>
    );
  }

  return (
    <div className="artworks-container">
      <Navbar />

      <section className="artworks-section">
        <h2>{artwork.title}</h2>
        <div className="artworks-gallery">
          {artwork.images.map((image, index) => (
            <img key={index} src={image} alt={`Artwork ${index + 1}`} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Artwork;
