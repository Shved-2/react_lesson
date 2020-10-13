import React from 'react';
import cl from './MyPost.module.css';
import Post from './Post/Post';

class MyPosts extends React.Component {
  render() {

    const postData = [
      {id: 1 , message: "ну вот как то так", like: 32 },
      {id: 2, message: "довольно не плохо получилось", like: 2 }
    ]

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
          <Post message={postData[0].message} like={postData[0].like}/>
          <Post message={postData[1].message} like={postData[1].like}/>
          <Post />
          <Post />
          <Post />
        </div>
      </div>

    );
  }
}

export default MyPosts;