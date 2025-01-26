import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./assets/styles/index.scss";
import HomePage from "./pages/homepage/Homepage.jsx";
import FAQ from "./pages/help-center/FAQ.jsx";
import ContactUs from "./pages/help-center/ContactUs.jsx";
import PrivacyPolicy from "./pages/help-center/PrivacyPolicy.jsx";
import Rules from "./pages/help-center/Rules.jsx";
import TermsOfUse from "./pages/help-center/TermsOfUse.jsx";
import ResetPassword from "./components/Reset-Password/ResetPassword.jsx";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Registration from "./components/Registration/Registration.jsx";
import Login from "./components/Login/Login.jsx";
import { useDispatch, useSelector } from "react-redux";
import { fetchAccountThunk } from "./features/user/userSlice";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.scss";
import MainLoading from "./components/loader/MainLoading.jsx";

function App() {
  const [registrationModalOpened, setRegistrationModalOpened] = useState(false);
  const [loginModalOpened, setLoginModalOpened] = useState(false);
  const [state, setState] = useState(false);
  const openRegistrationModal = () => {
    setRegistrationModalOpened(true);
  };
  const closeRegistrationModal = () => {
    setRegistrationModalOpened(false);
  };
  const openLoginModal = () => {
    setLoginModalOpened(true);
  };
  const closeLoginModal = () => {
    setLoginModalOpened(false);
  };
  const closeAllModals = () => {
    setLoginModalOpened(false);
    setRegistrationModalOpened(false);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    // Attempt to fetch the user from the server on first load/refresh.
    dispatch(fetchAccountThunk());
  }, [dispatch]);
  const loading = useSelector((state) => state.user.loading);
  const user = useSelector((state) => state.user);
  if (loading) {
    return <MainLoading />;
  }

  return (
    <Router>
      <Header openRegistrationModal={openRegistrationModal} />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              closeAllModals={closeAllModals}
              loginModalOpened={loginModalOpened}
              registrationModalOpened={registrationModalOpened}
              closeRegistrationModal={closeRegistrationModal}
              closeLoginModal={closeLoginModal}
              openRegistrationModal={openRegistrationModal}
              openLoginModal={openLoginModal}
            />
          }
        />
        <Route
          path="/reset-password/:token"
          element={
            <ResetPassword
              openLoginModal={openLoginModal}
              closeAllModals={closeAllModals}
            />
          }
        />

        <Route path="/help/faq" element={<FAQ />} />
        <Route path="/help/contact-us" element={<ContactUs />} />
        <Route path="/help/rules" element={<Rules />} />
        <Route path="/help/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/help/terms-of-use" element={<TermsOfUse />} />
      </Routes>

      {registrationModalOpened && user ? (
        <Registration
          closeAllModals={closeAllModals}
          openLoginModal={openLoginModal}
          closeRegistrationModal={closeRegistrationModal}
        />
      ) : null}
      {loginModalOpened && user ? (
        <Login
          closeLoginModal={closeLoginModal}
          openRegistrationModal={openRegistrationModal}
          closeAllModals={closeAllModals}
        />
      ) : null}
      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        theme="light"
      />
    </Router>
  );
}

export default App;
