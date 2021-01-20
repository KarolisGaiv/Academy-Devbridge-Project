import React, { useState, useRef, useEffect } from "react";
import "./user-profile.scss";
import UserAvatar from "../UserAvatar/UserAvatar";
import SVGIcon from "../SVGIcon/SVGIcon";

const UserProfile = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [data, setData] = useState({});
  const widgetRef = useRef();

  const showMenuFunc = () => {
    if (!showMenu) {
      document.addEventListener("click", closeMenu, false);
    } else {
      document.removeEventListener("click", closeMenu, false);
    }
    setShowMenu(!showMenu);
  };

  const closeMenu = (e) => {
    if (widgetRef.current.contains(e.target)) {
      return;
    }
    showMenuFunc();
  };

  useEffect(() => {
    fetch("http://localhost:3008/userData")
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      });
  }, []);

  return (
    data.userImage !== undefined && (
      <div className="widget-container" ref={widgetRef}>
        <div className="profile">
          <button onClick={showMenuFunc} className="profile__btn">
            <UserAvatar imageSrc={data.userImage} size={40} />
            <SVGIcon name="dropdown" className="profile__dropdown-arrow" />
          </button>
          {showMenu && (
            <nav className="drop-menu">
              <div className="drop-menu__arrow-up"></div>
              <ul className="drop-menu__wrapper">
                <li className="drop-menu__item">
                  <a href="/progress" className="drop-menu__item-link">
                    <SVGIcon name="settings" />
                    <span className="drop-menu__text">Settings</span>
                  </a>
                </li>
                <li className="drop-menu__item">
                  <a href="/" className="drop-menu__item-link">
                    <SVGIcon name="logout" />
                    <span className="drop-menu__text">Log out</span>
                  </a>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </div>
    )
  );
};

export default UserProfile;
