import React from 'react';
import cl from './Dialog.module.css';
import { NavLink } from 'react-router-dom';
import DialogItem from './dialogItem/DialogItem';
import Message from './message/Message';



class Dialog extends React.Component {
  render() {
    
    let dialogData = this.props.dialogData;
   
    let messagesData = this.props.messagesData;

    let DialogElement = dialogData.map((d) => {
      return (
        <DialogItem name={d.name} id={d.id} />
      )
    })

    let MessageElement = messagesData.map((m) => {
      return (
        <Message message={m.message} />
      )
    })

    return (
      <div className={cl.dialogs}>
        <div className={cl.dialogItem}>
          {DialogElement}
        </div>
        
        <div className={cl.messages}>
          {MessageElement}
        </div>

      </div>
    );
  }
}

export default Dialog;