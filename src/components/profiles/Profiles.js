import React from 'react';
import classes from'./Profiles.module.css';
import MyPost from './myPosts/MyPost';

class Profiles extends React.Component {
  render() {
    return (

      <div className={classes.content}>
        <div>
          <img src="https://icocnews.ru/wp-content/uploads/2015/09/priroda.jpg" />
          Main content
          </div>
        <div>
          ava + description
          </div>
          
          <MyPost />
        
      </div>
    );
  }
}

export default Profiles;