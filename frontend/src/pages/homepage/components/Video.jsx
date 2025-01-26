import React, { useState } from "react";
import PlayVideoImage from "../../../assets/images/video-preview.png";
import VideoPlayImage from "../../../assets/images/video-play.png";
import ArrowLarge from "../../../assets/images/arrow-large.svg";

export default function Video() {
  const [showModal, setShowModal] = useState(false);
  const [videoSrc, setVideoSrc] = useState(null);

  const handleOpenModal = async () => {
    // Dynamically import the video asset
    const module = await import("../../../assets/videos/preview.webm");
    setVideoSrc(module.default);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    // Optionally clear the video source if you want to free it up:
    setVideoSrc(null);
  };

  return (
    <section className="video">
      <div className="container">
        <div className="left">
          <div className="video" onClick={handleOpenModal}>
            <img src={PlayVideoImage} alt="video preview" />
            <button>
              <img src={VideoPlayImage} alt="video play icon" />
            </button>
          </div>
        </div>
        <div className="right">
          <h2>What is Fantasy Team?</h2>
          <h4>Watch the video or scroll down</h4>
          <a href="#main-part">
            <img src={ArrowLarge} alt="arrow" />
          </a>
        </div>
      </div>

      {showModal && (
        <div className="video-modal-overlay" onClick={handleCloseModal}>
          <div className="video-modal-content">
            {/* Only render the <video> element after the src is loaded */}
            {videoSrc && (
              <video
                onClick={(e) => e.stopPropagation()}
                src={videoSrc}
                controls
                autoPlay
              />
            )}
          </div>
        </div>
      )}
    </section>
  );
}
