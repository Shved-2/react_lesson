import React from 'react';
import cl from './MyPost.module.css';
import Post from './Post/Post';

class MyPosts extends React.Component {
  render() {
    return (
      <div className={cl.content}>
        <h3>My posts</h3>

        <div>
          New post
          <div><textarea></textarea></div>
          
          <div><button>Add post</button></div>
          <div><button>Remuve</button></div>
          
          
            </div>
        <div className={cl.post}>
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