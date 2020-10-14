import React from 'react';
import cl from './../Dialog.module.css';






class Message extends React.Component{
  render() {
    let  pr = this.props;
    return (
      <div className={cl.message}>{pr.message}</div>
    )
  }

}

/*
const Message = (props) => {
  return (
    <div className={cl.message}>{props.message}</div>
  )
}
*/
export default Message;



