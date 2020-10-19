import React from 'react';
//import classes from './Post.module.css';

class Frend extends React.Component {
  render() {
    return (
      <div >
        
        <img src="https://avatarko.ru/img/kartinka/9/muzhchina_shlyapa_8746.jpg" />

        {this.props.name}
        
        
      </div>
    );
  }
}

export default Frend;