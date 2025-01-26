import React, { useState } from "react";
import "./Styles.scss";
import { Link } from "react-router-dom";
import { sendMessage } from "../../services/messageService";

// If using react-toastify:
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await sendMessage({ name, email, message });

      // Show success toast
      toast.success("Message sent successfully!");

      // Clear the form
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      // Show error toast
      toast.error("Something went wrong. Please try again later.");
    }
  };

  return (
    <section className="help">
      <div className="help-container">
        <h2 className="title">
          We are here to
          <div>help you</div>
        </h2>
        <nav className="help-nav">
          <ul>
            <li>
              <Link to="/help/faq">FAQ</Link>
            </li>
            <li>
              <Link to="/help/rules">Rules</Link>
            </li>
            <li className="active">
              <Link to="/help/contact-us">Contact Us</Link>
            </li>
            <li>
              <Link to="/help/terms-of-use">Terms of use</Link>
            </li>
            <li>
              <Link to="/help/privacy-policy">Privacy Policy</Link>
            </li>
          </ul>
        </nav>

        <div className="block contact-us">
          <h2>
            Can’t find the answer you’re looking for? Please chat to our
            friendly team.
          </h2>
          <p>We will contact you within 24 hours</p>

          {/* Form for user inputs */}
          <form onSubmit={handleSubmit}>
            <div className="input">
              <div className="input-container">
                <input
                  type="text"
                  className="styled-input"
                  placeholder=" "
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <label className="input-label">Name</label>
              </div>
              <div className="input-container">
                <input
                  type="email"
                  className="styled-input"
                  placeholder=" "
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <label className="input-label">Email</label>
              </div>
            </div>

            <textarea
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />

            <button type="submit" className="btn">
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
