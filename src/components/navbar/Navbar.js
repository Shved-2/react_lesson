import React from 'react';
import cl from'./Navbar.module.css';

class NavBar extends React.Component {
  render() {
    return (

      <nav className={cl.nav}>
        <div className={cl.item}><a>Profile</a></div>
        <div className={`${cl.item} ${cl.activ}`}><a>Message</a></div>
        <div className={cl.item}><a>Profile</a></div>
        <div className={cl.item}><a>Profile</a></div>
        <div className={cl.item}><a>Profile</a></div>
      </nav>

    );
  }
}

export default NavBar;