import React, { useState } from "react";
import "./Styles.scss";
import { Link } from "react-router-dom";
import arrowImage from "../../assets/images/arrow-right-blue.svg";

export default function Rules() {
  // Track which block item is currently active (open).
  // If no item is open, activeIndex is null.
  const [activeIndex, setActiveIndex] = useState(null);

  // Handler that toggles the active state of a block item based on its index.
  const toggleBlock = (index) => {
    if (activeIndex === index) {
      // Close if it's already open
      setActiveIndex(null);
    } else {
      // Open the clicked item
      setActiveIndex(index);
    }
  };

  // Example data for Rules blocks to avoid repeated markup.
  // Each "block" can map over these items.
  const RulesDataBlock1 = [
    {
      title: "Is there a free trial available?",
      description:
        "Once a player’s fixture begins, they become locked and can no longer be swapped for another player that week. However, players who haven’t yet started their game remain unlocked and can be transferred for other unlocked players.",
    },
    {
      title: "Is there a free trial available?",
      description:
        "Once a player’s fixture begins, they become locked and can no longer be swapped for another player that week. However, players who haven’t yet started their game remain unlocked and can be transferred for other unlocked players.",
    },
    {
      title: "Is there a free trial available?",
      description:
        "Once a player’s fixture begins, they become locked and can no longer be swapped for another player that week. However, players who haven’t yet started their game remain unlocked and can be transferred for other unlocked players.",
    },
    {
      title: "Is there a free trial available?",
      description:
        "Once a player’s fixture begins, they become locked and can no longer be swapped for another player that week. However, players who haven’t yet started their game remain unlocked and can be transferred for other unlocked players.",
    },
    {
      title: "Is there a free trial available?",
      description:
        "Once a player’s fixture begins, they become locked and can no longer be swapped for another player that week. However, players who haven’t yet started their game remain unlocked and can be transferred for other unlocked players.",
    },
    {
      title: "Is there a free trial available?",
      description:
        "Once a player’s fixture begins, they become locked and can no longer be swapped for another player that week. However, players who haven’t yet started their game remain unlocked and can be transferred for other unlocked players.",
    },
  ];

  const RulesDataBlock2 = [
    {
      title: "Is there a free trial available?",
      description:
        "Once a player’s fixture begins, they become locked and can no longer be swapped for another player that week. However, players who haven’t yet started their game remain unlocked and can be transferred for other unlocked players.",
    },
    {
      title: "Is there a free trial available?",
      description:
        "Once a player’s fixture begins, they become locked and can no longer be swapped for another player that week. However, players who haven’t yet started their game remain unlocked and can be transferred for other unlocked players.",
    },
    {
      title: "Is there a free trial available?",
      description:
        "Once a player’s fixture begins, they become locked and can no longer be swapped for another player that week. However, players who haven’t yet started their game remain unlocked and can be transferred for other unlocked players.",
    },
    {
      title: "Is there a free trial available?",
      description:
        "Once a player’s fixture begins, they become locked and can no longer be swapped for another player that week. However, players who haven’t yet started their game remain unlocked and can be transferred for other unlocked players.",
    },
    {
      title: "Is there a free trial available?",
      description:
        "Once a player’s fixture begins, they become locked and can no longer be swapped for another player that week. However, players who haven’t yet started their game remain unlocked and can be transferred for other unlocked players.",
    },
  ];

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
              <Link to="/help/FAQ">FAQ</Link>
            </li>
            <li className="active">
              <Link to="/help/rules">Rules</Link>
            </li>
            <li>
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

        {/* BLOCK 1 */}
        <div className="block">
          <h3>Is there a free trial available?</h3>
          {RulesDataBlock1.map((item, index) => (
            <div
              key={index}
              className={`block-item ${activeIndex === index ? "active" : ""}`}
            >
              <h4>{item.title}</h4>
              <p>{item.description}</p>
              {/* Toggling click on the open-close div */}
              <div
                className={`open-close ${
                  activeIndex === index ? "active" : ""
                }`}
                onClick={() => toggleBlock(index)}
              >
                <div className="line"></div>
              </div>
            </div>
          ))}
        </div>

        {/* BLOCK 2 */}
        <div className="block">
          <h3>What happens if a player’s game kicks off?</h3>
          {RulesDataBlock2.map((item, idx) => {
            // We offset the indices so they don't conflict with block 1
            const block2Index = idx + RulesDataBlock1.length;
            return (
              <div
                key={block2Index}
                className={`block-item ${
                  activeIndex === block2Index ? "active" : ""
                }`}
              >
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <div
                  className={`open-close ${
                    activeIndex === block2Index ? "active" : ""
                  }`}
                  onClick={() => toggleBlock(block2Index)}
                >
                  <div className="line"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* LAST BLOCK */}
        <div className="block last">
          <h3>Still have questions?</h3>
          <p>
            Can’t find the answer you’re looking for? Please chat to our
            friendly team.
          </p>
          <div className="dfjcc">
            <button className="btn">Get in touch</button>
          </div>
        </div>
      </div>
    </section>
  );
}
