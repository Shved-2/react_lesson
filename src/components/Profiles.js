import React from 'react';
import classes from'./Profiles.module.css';

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
        <div>
          My post

            <div>
            New post
            </div>
          <div className={classes.post}>
            <div className={classes.item}>Post 1</div>
            <div className={classes.item}>Post 2</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profiles;