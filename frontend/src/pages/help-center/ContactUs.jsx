import React, { useState } from "react";
import "./Styles.scss";
import { Link } from "react-router-dom";
import arrowImage from "../../assets/images/arrow-right-blue.svg";

export default function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
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
          <div className="input">
            <div className="input-container">
              <input
                type="text"
                className="styled-input"
                placeholder=" "
                value={name}
                onChange={(e) => setName(e.target.value)}
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
              />
              <label className="input-label">Email</label>
            </div>
          </div>
          <textarea placeholder="Message"></textarea>
          <button className="btn">Send</button>
        </div>
      </div>
    </section>
  );
}
