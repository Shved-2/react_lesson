import React from 'react';
import cl from './MyPost.module.css';
import Post from './Post/Post';

class MyPosts extends React.Component {
  render() {


    let posts = this.props.posts;//принимаем массив с постами на страницу(текст+лайки)
    //размещаем посты из массива на страницу
    let postsElement = posts.map((p) => {
      return (
        <Post message={p.message} like={p.like} />
      )
    });
    let addPost1 = this.props.addPost;
    
    let newPost = React.createRef();//данные из textarea
    
    let addPost = () => {    
      
      let text = newPost.current.value;  
      newPost.current.value = '';    
      addPost1(text);
    }
    

    return (
      <div className={cl.content}>
        <h3>My posts</h3>

        <div>
          New post
          <div><textarea ref={newPost}></textarea></div>

          <div>
            <button onClick={addPost}> Add post </button>
          </div>
          
        </div>

        <div className={cl.post}>
          {postsElement}

        </div>
      </div>

    );
  }
}

export default MyPosts;