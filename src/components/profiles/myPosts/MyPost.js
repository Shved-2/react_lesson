import React from 'react';
import cl from './MyPost.module.css';
import Post from './Post/Post';

class MyPosts extends React.Component {
  render() {

    
    let posts = this.props.posts;

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