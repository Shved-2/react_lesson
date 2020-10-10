import React from 'react';
import classes from './MyPost.module.css';
import Post from './Post/Post';

class MyPosts extends React.Component {
  render() {
    return (
      <div>
        My post

        <div>
          New post
          <textarea></textarea>
          <button>Add post</button>
          <button>Remuve</button>
            </div>
        <div className={classes.post}>
          <Post message="ну вот как то так" like="20"/>
          <Post message="довольно не плохо получилось" like="7"/>
          <Post />
          <Post />
          <Post />
        </div>
      </div>

    );
  }
}

export default MyPosts;