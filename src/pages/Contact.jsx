import React, { useState } from "react";
import { Mail, Phone } from "lucide-react";
import { FaInstagram, FaLinkedin, FaPinterest } from "react-icons/fa";
import Navbar from "../components/Navbar";
import sendMessageToSheet from "./GoogleSheetApp"; // Import the function
import "../App.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError("");
  
    const trimmedData = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      message: formData.message.trim(),
    };
  
    if (!trimmedData.name || !trimmedData.email || !trimmedData.message) {
      setError("All fields are required.");
      setLoading(false);
      return;
    }
  
    try {
      const response = await sendMessageToSheet(trimmedData); // Send data
  
      // Debugging: Log the full response
      console.log("Raw Response:", response);
  
      // If response is not JSON, it might be an error page
      if (typeof response !== "object") {
        throw new Error("Invalid response format (not JSON). Check API.");
      }
  
      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Error:", err);
      setError("Failed to send message. Check API access.");
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <>
      <Navbar />
      <div className="contact-container">
        <div className="contact-box">
          <h2 className="text-3xl font-extrabold text-pink-500 text-center">
            Contact Us
          </h2>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                required
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, name: e.target.value }))
                }
              />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                required
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, email: e.target.value }))
                }
              />
            </div>

            <div>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                required
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, message: e.target.value }))
                }
              />
            </div>

            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>

            {success && (
              <p className="text-green-500 text-center mt-2">Message sent successfully!</p>
            )}
            {error && (
              <p className="text-red-500 text-center mt-2">{error}</p>
            )}
          </form>

          {/* Social Media Section */}
          <div className="social-media-section">
            <h3 className="text-xl font-bold text-center text-gray-900 mt-6">
              Follow Me
            </h3>
            <p className="text-gray-500 text-center">
              Stay connected with us on social media!
            </p>

            <div className="social-icons">
              <a
                href="https://www.instagram.com/braided_art05?igsh=MTN6NGxuZ2ExdWVwZQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon text-pink-500"
              >
                <FaInstagram />
              </a>
              <a
                href="https://pin.it/6JuyYKd4B"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaPinterest className="social-icon" />
              </a>
              <a
                href="https://www.linkedin.com/in/unnati-bhatt-65a063244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon text-blue-700"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
