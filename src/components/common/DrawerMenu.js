import { slide as Menu } from 'react-burger-menu';
import React from 'react';

export default function DrawerMenu(props) {
  //   function showSettings(event) {
  //     event.preventDefault();
  //   }
  console.log('jhi');

  // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
  return (
    <Menu>
      <a id="home" className="menu-item" href="/">
        Home
      </a>
      <a id="about" className="menu-item" href="/about">
        About
      </a>
      <a id="contact" className="menu-item" href="/contact">
        Contact
      </a>
      {/* <a onClick={this.showSettings} className="menu-item--small" href="">
        Settings
      </a> */}
    </Menu>
  );
}
