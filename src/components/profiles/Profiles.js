import React from 'react';
import classes from './Profiles.module.css';
import MyPost from './myPosts/MyPost';
import ProfileInfo from './profileInfo/ProfileInfo';

class Profiles extends React.Component {
  render() {
    let posts = this.props.posts;
    return (
      <div >
        <ProfileInfo />
        <MyPost posts={posts}/>
      </div>
    );
  }
}

export default Profiles;