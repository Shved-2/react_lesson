import React from 'react';
import classes from './Header.module.css';

class Header extends React.Component {
  render() {
    return (

      <header className={classes.header}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png" />
      </header>
    );
  }
}

export default Header;