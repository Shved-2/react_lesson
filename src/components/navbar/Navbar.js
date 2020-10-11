import React from 'react';
import cl from'./Navbar.module.css';

class NavBar extends React.Component {
  render() {
    return (

      <nav className={cl.nav}>
        <div className={cl.item}><a href="/profiles">Profile</a></div>
        <div className={`${cl.item} ${cl.activ}`}><a href="/dialogs">Message</a></div>
        <div className={cl.item}><a href="/news">News</a></div>
        <div className={cl.item}><a href="/setting">Setting</a></div>
        <div className={cl.item}><a href="/inoe">Inoe</a></div>
      </nav>

    );
  }
}

export default NavBar;