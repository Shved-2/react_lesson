import React from 'react';
import classes from './Post.module.css';

class Post extends React.Component {
  render() {
    return (


      <div className={classes.item}>
        <img src="https://avatarko.ru/img/kartinka/9/muzhchina_shlyapa_8746.jpg"/>
        Post 1
        <div className="heart">
        <span>&hearts;</span>
        </div>
      </div>

    );
  }
}

export default Post;