import React from 'react';
import cl from './MyPost.module.css';
import Post from './Post/Post';

class MyPosts extends React.Component {
  render() {

    const posts = [
      { id: 1, message: "ну вот как то так", like: 32 },
      { id: 2, message: "довольно не плохо получилось", like: 2 },
      { id: 2, message: "три поросенка", like: 10 },
      { id: 2, message: "во всем виноват Навальный", like: 175 }
    ]

    let postsElement = posts.map((p) => {
      return (
        <Post message={p.message} like={p.like} />
      )
    })
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
          {postsElement}
        </div>
      </div>

    );
  }
}

export default MyPosts;