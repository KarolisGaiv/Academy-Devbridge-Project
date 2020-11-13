import React, { Component } from "react";
import "./user_profile.scss";
import { ReactComponent as UserProfile } from "assets/profileIcon.svg";
import { ReactComponent as SettingsIcon } from "assets/settingsIcon.svg";
import { ReactComponent as LogoutIcon } from "assets/logoutIcon.svg";

class User_Profile extends Component {
  constructor() {
    super();

    this.state = { showMenu: false };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu() {
    if (!this.state.showMenu) {
      document.addEventListener("click", this.closeMenu, false);
    } else {
      document.removeEventListener("click", this.closeMenu, false);
    }

    this.setState((prevState) => ({
      showMenu: !prevState.showMenu,
    }));
  }

  closeMenu(e) {
    if (this.node.contains(e.target)) {
      return;
    }
    this.showMenu();
  }

  render() {
    return (
      <div
        className="mainDiv"
        ref={(node) => {
          this.node = node;
        }}
      >
        <div className="wrapper">
          <button onClick={this.showMenu} className="profileBtn">
            <div className="placeholder">
              <UserProfile />
            </div>
          </button>
          {this.state.showMenu && (
            <nav className="drop-menu">
              <div className="arrow-up"></div>
              <ul className="drop-menu__body">
                <li className="drop-menu__item">
                  <div className="drop-menu__item-body">
                    <SettingsIcon />
                    <span className="drop-menu__item-body--text">Settings</span>
                  </div>
                </li>
                <li className="drop-menu__item">
                  <div className="drop-menu__item-body">
                    <LogoutIcon />
                    <span className="drop-menu__item-body--text">Log out</span>
                  </div>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </div>
    );
  }
}

export default User_Profile;
