import React, { Component } from "react";
import "./user_profile.scss";
import { ReactComponent as UserProfile } from "assets/user_Profile.svg";
import { ReactComponent as SettingsIcon } from "assets/settings.svg";
import { ReactComponent as LogoutIcon } from "assets/logout.svg";

class User_Profile extends Component {
  constructor() {
    super();

    this.state = { showMenu: false };

    this.showMenu = this.showMenu.bind(this);
    // this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();
    this.setState({ showMenu: true });

    document.addEventListener("click", this.closeMenu);
  }

  // closeMenu(event) {
  //   if (!this.dropdownMenu.contains(event.target)) {
  //     this.setState({ showMenu: false });

  //     document.removeEventListener("click", this.closeMenu);
  //   }
  // }

  render() {
    return (
      <div className="mainDiv">
        <button onClick={this.showMenu} className="profileBtn">
          <UserProfile />
        </button>

        {this.state.showMenu ? (
          <nav
            className="dropMenu"
            ref={(element) => {
              this.dropdownMenu = element;
            }}
          >
            <ul className="menuWrapper">
              <li className="topWrapper">
                <LogoutIcon />
                <a href="https://www.google.com/">Settings</a>
              </li>
              <li className="bottomWrapper">
                <div className="bottomItem">
                  <div className="btmItemContainer">
                    <SettingsIcon />
                    <a href="https://www.delfi.lt/">Log out</a>
                  </div>
                </div>
              </li>
            </ul>
          </nav>
        ) : null}
      </div>
    );
  }
}

export default User_Profile;
