import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar";
import "../App.css";

const artworks = [
  {
    id: 1,
    title: "Krishna's Divine Portrait",
    image: "/art1.jpg",
    path: "/Art1",
  },
  {
    id: 2,
    title: "The Mystical Eye",
    image: "/art2.jpg",
    path: "/Art2",
  },
  {
    id: 3,
    title: "Teddy in Sunflowers",
    image: "/art3.jpg",
    path: "/Art3",
  },
  {
    id: 4,
    title: "Rose in Bloom",
    image: "/art4.jpg",
    path: "/Art4",
  },
  {
    id: 5,
    title: "Portrait Study",
    image: "/art5.jpg",
    path: "/Art5",
  },
  {
    id: 6,
    title: "Abstract Composition",
    image: "/art6.jpg",
    path: "/Art6",
  }
];

function Gallery() {
  return (
    <>
      <Navbar />
      <div className="gallery-container1">
        <div className="min-h-screen py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-pink-600 sm:text-4xl">
                Gallery Tour
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Explore the Art, Feel the Passion – A Visual Tour Like No Other!
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {artworks.map((artwork) => (
                <Link key={artwork.id} to={artwork.path} className="block group">
                  <div className="relative bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                    <img
                      src={artwork.image}
                      alt={artwork.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-pink-500">
                        {artwork.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Gallery;
