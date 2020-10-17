import React from 'react';
import cl from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import  Frends from './frend/Frends';

class NavBar extends React.Component {
  render() {
    //let frends = this.props.frends;
    return (

      <nav className={cl.nav}>
        <div className={cl.item}>
          <NavLink to="/profiles" activeClassName={cl.active}>Profile</NavLink>
        </div>
        <div className={cl.item}>
          <NavLink to="/dialogs" activeClassName={cl.active}>Message</NavLink></div>
        <div className={cl.item}>
          <NavLink to="/news" activeClassName={cl.active}>News</NavLink>
        </div>
        <div className={cl.item}>
          <NavLink to="/music" activeClassName={cl.active}>Music</NavLink>
        </div>
        <div className={cl.item}>
          <NavLink to="/setting" activeClassName={cl.active}>Setting</NavLink>
        </div>

        <Frends /*frends={frends}*//>

      </nav>

    );
  }
}

export default NavBar;