import React, { useEffect, useState } from "react";
import RegistrationForm from "./RegistrationForm.jsx";
import Verification from "../Verification/Verification.jsx";
import "./styles.scss";

export default function Registration({
  closeRegistrationModal,
  openLoginModal,
  closeAllModals,
  setShowVerification,
  showVerification,
  setEmail,
  email,
}) {
  // Called by RegistrationForm on successful registration
  const handleRegistrationSuccess = () => {
    setShowVerification(true);
  };

  // If user wants to go back from verification
  const handleBack = () => {
    setShowVerification(false);
  };

  return (
    <div className="registration">
      <div
        className="background"
        onClick={() => closeRegistrationModal()}
      ></div>
      {!showVerification ? (
        <RegistrationForm
          email={email}
          setShowVerification={setShowVerification}
          setEmail={setEmail}
          onSuccess={handleRegistrationSuccess}
          closeRegistrationModal={closeRegistrationModal}
          openLoginModal={openLoginModal}
        />
      ) : (
        <Verification
          defaultEmail={email}
          closeAllModals={closeAllModals}
          onBack={handleBack}
        />
      )}
    </div>
  );
}
