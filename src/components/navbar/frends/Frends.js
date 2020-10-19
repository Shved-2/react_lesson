import React from 'react';
import cl from './Frends.module.css';
import { NavLink } from 'react-router-dom';
import Frend from './frend/Frend'

class Frends extends React.Component {
  render() {

    /*
    let frends = this.props.frends;
    console.log(frends);

    let frendElement = frends.map((fr) => {
      return (
        <Frend name={fr.name} />
      )
    });*/

    return (

      <div className={cl.frendContent} >
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
        
        {/*frendElement*/}


      </div>

    );
  }
}

export default Frends;