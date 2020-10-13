import React from 'react';
import classes from './Profiles.module.css';
import MyPost from './myPosts/MyPost';
import ProfileInfo from './profileInfo/ProfileInfo';

class Profiles extends React.Component {
  render() {
    return (
      <div >
        <ProfileInfo />
        <MyPost />
      </div>
    );
  }
}

export default Profiles;