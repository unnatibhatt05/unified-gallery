import React from "react";
import Navbar from "../components/Navbar";
import "../App.css";

const About = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* About Section with Proper Layout */}
      <div className="about-container">
        <section className="about-section">
          {/* About Image */}
          <div className="about-image">
            <img src="/about us.webp" alt="About Us" />
          </div>

          {/* About Text */}
          <div className="about-text">
            <h2>About Unified Gallery</h2>
            <p>
              Unified Gallery is a place where art and culture come together.
              Our mission is to provide a platform for artists to showcase their
              creativity and inspire art lovers around the world.
            </p>
            <p>
              We believe that art is a universal language that connects people
              across different backgrounds. Our gallery features a diverse
              collection of paintings, sculptures, digital art, and more.
            </p>
            <p><h2>My Artistic Journey</h2>
            
Art has been a passion of mine since childhood. Over the years, I have explored various mediums, from traditional sketches .
Here’s a glimpse of my journey:
<p>🎨 Started Drawing as a Hobby – Experimenting with pencil sketches and watercolors.  </p><p>💡 Discovered Digital Art – Transitioned to creating digital illustrations, exploring various software.</p><p>📌 Exhibited Artwork Online – Showcased my work on different platforms, receiving appreciation and feedback.</p>
 <p>🌟 Founded Unified Gallery – A dedicated space to share my work and connect with fellow art enthusiasts.</p></p>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
