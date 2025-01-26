import React from "react";
import Hero from "./components/Hero.jsx";
import Video from "./components/Video.jsx";
import Steps from "./components/Steps.jsx";
import Rewards from "./components/Rewards.jsx";
import Features from "./components/Features.jsx";
import Fixtures from "./components/Fixtures.jsx";
import JoinTheLeague from "./components/JoinTheLeagues.jsx";
import Cta from "./components/Cta.jsx";

import "./styles.scss";
import { useSelector } from "react-redux";
import Leagues from "./components/League/League.jsx";
import { FixturesAuth } from "./components/FixturesAuth/index.jsx";
import { HomeSection } from "./components/Reklam/index.jsx";
import DesignComponent from "../../components/Design/index.jsx";
export default function Homepage({
  registrationModalOpened,
  loginModalOpened,
  closeRegistrationModal,
  closeLoginModal,
  openRegistrationModal,
  openLoginModal,
  closeAllModals,
}) {
  const isLogin = useSelector((state) => {
    return !!state.user.user; // get user from redux
  });
  if (isLogin) {
    return (
      <main className="home__logined">
        <Leagues />
        <HomeSection />
        <Features mt70={true} />
        <div className="home__block">
          <FixturesAuth />
          <Rewards />
        </div>
      </main>
    );
  }
  return (
    <main>
      <Hero openRegistrationModal={openRegistrationModal} />
      <Video />
      <Steps />
      <Rewards />
      <Features withLines={true} />
      <Fixtures />
      <JoinTheLeague openRegistrationModal={openRegistrationModal} />
      <Cta openRegistrationModal={openRegistrationModal} />
    </main>
  );
}
