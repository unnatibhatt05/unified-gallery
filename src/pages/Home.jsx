import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Icons for navigation
import "../App.css";

const slides = [
  {
    image: "/slider1.jpg",
    title: "Explore the World of Art",
    text: "Experience stunning visuals and breathtaking artworks.",
  },
  {
    image: "/slider2.avif",
    title: "Discover Creativity",
    text: "Unleash imagination through vibrant masterpieces.",
  },
  {
    image: "/slider3.avif",
    title: "Inspiration Awaits",
    text: "Find your artistic voice and let it shine.",
  },
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length); // Loop forward
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length); // Loop backward
  };

  return (
    <>
      <Navbar />
      <div className="home-container">
      <h1 className="home-title">Unified Gallery</h1>
   
        {/* Hero Section with Slider */}
        <div className="hero-section">
          <div className="slider-card">
            <img
              src={slides[currentSlide].image}
              alt="Slide"
              className="slider-image"
            />
            <div className="slider-content">
              <h1>{slides[currentSlide].title}</h1>
              <p>{slides[currentSlide].text}</p>
              <a href="/gallery" className="btn">Start Tour</a>
            </div>
          </div>

          {/* Slider Buttons */}
          <button className="slider-btn left" onClick={prevSlide}>
            <ChevronLeft size={32} />
          </button>
          <button className="slider-btn right" onClick={nextSlide}>
            <ChevronRight size={32} />
          </button>
        </div>

        {/* About Preview */}
        <section className="about-preview">
          <div className="about-text">
            <h2>About Us</h2>
            <p>
              Discover the vision behind our gallery and the artists we feature.<p>Explore our collection, discover new talents, and join us on a journey through the vibrant world of artistic expression.</p>We believe in the power of art to connect people across cultures and backgrounds. Whether you’re an artist looking to showcase your work or an admirer seeking inspiration, Unified Gallery is the perfect place to immerse yourself in creativity.<p></p>
            </p>
            <a href="/about" className="btn">Learn More</a>
          </div>
          <div className="card">
            <img src="/about prw.jpg" alt="About Us" />
          </div>
        </section>

        {/* Gallery Preview */}
        <section className="gallery-preview">
          <h2>Gallery Tour</h2>
          <p></p>
          <div className="gallery-container">
            <div className="card">
              <img src="/art1.jpg" alt="Gallery 1" />
            </div>
            <div className="card">
              <img src="/art2.jpg" alt="Gallery 2" />
            </div>
            <div className="card">
              <img src="/art3.jpg" alt="Gallery 3" />
            </div>
          </div>
          <a href="/gallery" className="btn">View More</a>
        </section>
      </div>
 
    </>
  );
};

export default Home;
