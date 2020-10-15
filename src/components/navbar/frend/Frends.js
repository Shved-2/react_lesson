import React from 'react';
import cl from './Frends.module.css';
import { NavLink } from 'react-router-dom';

class Frends extends React.Component {
  render() {
    return (

      <div className={cl.frendContent}>
        <h2>FRENDS</h2>
        <div className={cl.frend}>
          <img />
          <br />
          <span>ВАСЯ</span>
        </div>
        <div className={cl.frend}>
          <img />
          <br />
          <span>ПЕТЯ</span>
        </div>
        <div className={cl.frend}>
          <img />
          <br />
          <span>МИША</span>
        </div>

      </div>

    );
  }
}

export default  Frends;