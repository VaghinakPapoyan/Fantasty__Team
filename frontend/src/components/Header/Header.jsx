import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ArrowImage from "../../assets/images/arrow.png";
import logoImage from "../../assets/images/logo-image.png";
import bellImage from "../../assets/images/bell.svg";
import userImage from "../../assets/images/user.svg";
import personImage from "../../assets/images/person.png";
import { useDispatch } from "react-redux";
import { logoutUserThunk } from "../../features/user/userSlice";

import "./styles.scss";
import { useSelector } from "react-redux";
import { readNotification } from "../../services/authService";
import moment from "moment";

export default function Header({ openRegistrationModal }) {
  const { user } = useSelector((state) => state.user);
  const [notifications, setNotifications] = useState(
    user ? user.notifications : []
  );
  const [isOpenNotifications, setIsOpenNotifications] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUserThunk());
  };
  const toggleShowDropdown = () => {
    setShowUserDropdown((state) => !state);
  };

  const filterNotifications = (items) => {
    if (!items) return [];
    return [...items].sort(
      (a, b) => new Date(b.created_at) - new Date(a.created_at)
    );
  };

  const openNotifications = async () => {
    if (isOpenNotifications) {
      setIsOpenNotifications(false);
      return;
    }
    setIsOpenNotifications(true);
    await readNotification(user._id);
    setNotifications(
      filterNotifications(
        notifications.map((e) => {
          return {
            ...e,
            active: false,
          };
        })
      )
    );
  };

  useEffect(() => {
    setNotifications(
      filterNotifications(user ? user.notifications : notifications)
    );
  }, [user?.notifications]);

  const getActiveCount = () => {
    return notifications.reduce((prev, next, i) => {
      if (notifications[i].active) return prev + 1;
      return prev;
    }, 0);
  };

  if (user) {
    return (
      <header className="header">
        <div className="container">
          <div className="logo">
            <img src={logoImage} alt="" />
          </div>
          <div className="nav">
            <ul>
              <li>
                <Link to="/all-leagues">All leagues</Link>
              </li>
              <li>
                <Link to="/get-bonuses">Get bonuses</Link>
              </li>
              <li>
                <Link to="/prizes">Prizes</Link>
              </li>
              <li>
                <Link to="/hot-to-play">How to play</Link>
              </li>
              <li>
                <Link to="/leaderboard">Leaderboard</Link>
              </li>
              <li className="pr dropdown-container">
                <button>
                  Help center <img src={ArrowImage} alt="arrow" />
                </button>
                {/* dropdown */}
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/faq">FAQ</Link>
                  </li>
                  <li>
                    <Link to="/rules">Rules</Link>
                  </li>
                  <li>
                    <Link to="/contact-us">Contact Us</Link>
                  </li>
                  <li>
                    <Link to="/terms-of-use">Terms Of Use</Link>
                  </li>
                  <li>
                    <Link to="/privacy-policy">Privacy Policy</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="right">
            <div className="left" onClick={() => openNotifications()}>
              <img src={bellImage} alt="bell" />
              {getActiveCount()}
            </div>
            {isOpenNotifications && (
              <div className="notifications__popup">
                {notifications.map((e) => {
                  return (
                    <div className="notification">
                      {e.text}- {moment(e.created_at).format("D MMM HH:mm")}
                      {e.active && <div className="notification__circle"></div>}
                    </div>
                  );
                })}
              </div>
            )}
            <div className="right" onClick={toggleShowDropdown}>
              <img src={userImage} alt="user" />
              <img
                src={ArrowImage}
                className={showUserDropdown ? "active" : ""}
                alt="arrow"
              />
            </div>
            <div
              className={
                showUserDropdown
                  ? "profile-dropdown active"
                  : "profile-dropdown"
              }
            >
              <div className="img">
                <img src={personImage} alt="user" />
              </div>
              <h3>Name Surname</h3>
              <p>example@gmail.com</p>
              <ul>
                <li>
                  <Link to="profile-info">Profile info</Link>
                </li>
                <li>
                  <Link to="invite-friends">Notifications</Link>
                </li>
                <li>
                  <Link to="language">Change language</Link>
                </li>
                <li>
                  <button onClick={handleLogout}>Logout</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    );
  } else {
    return (
      <header className="header">
        <div className="container">
          <div className="logo">
            <img src={logoImage} alt="" />
          </div>
          <div className="nav">
            <ul>
              <li>
                <Link to="/all-leagues">All leagues</Link>
              </li>
              <li>
                <Link to="/hot-to-play">How to play</Link>
              </li>
              <li className="pr dropdown-container">
                <button>
                  Help center <img src={ArrowImage} alt="arrow" />
                </button>
                {/* dropdown */}
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/faq">FAQ</Link>
                  </li>
                  <li>
                    <Link to="/rules">Rules</Link>
                  </li>
                  <li>
                    <Link to="/contact-us">Contact Us</Link>
                  </li>
                  <li>
                    <Link to="/terms-of-use">Terms Of Use</Link>
                  </li>
                  <li>
                    <Link to="/privacy-policy">Privacy Policy</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="right">
            <div className="languages pr dropdown-container">
              Eng
              <img src={ArrowImage} alt="arrow" />
              {/* dropdown */}
              <ul className="dropdown-menu dropdown-menu-sm">
                <li>
                  <Link>
                    <button>Eng</button>
                  </Link>
                </li>
                <li>
                  <Link>
                    <button>Rus</button>
                  </Link>
                </li>
                <li>
                  <Link>
                    <button>Arm</button>
                  </Link>
                </li>
              </ul>
            </div>
            <button
              onClick={() => openRegistrationModal()}
              className="btn sign-up"
            >
              Sign In
            </button>
          </div>
        </div>
      </header>
    );
  }
}
