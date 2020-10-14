import React from 'react';
import cl from './Dialog.module.css';
import { NavLink } from 'react-router-dom';
import DialogItem from './dialogItem/DialogItem';
import Message from './message/Message';



class Dialog extends React.Component {
  render() {
    const dialogData = [
      { name: "Вячеслав", id: 1 },
      { name: "Николай", id: 2 },
      { name: "Наталья", id: 3 },
      { name: "Василий", id: 4 },
      { name: "Екатерина", id: 5 },
      { name: "Петр", id: 6 },
      { name: "Светлана", id: 7 },
      { name: "Сергей", id: 8 }
    ]
    const messagesData = [
      { message: "Че каво?", id: 1 },
      { message: "привет , ну как то ттак, ничего очобенного", id: 2 },
      { message: "Ну давай . мног не давай", id: 3 },
      { message: "йоу", id: 4 },
      { message: "йоу", id: 5 }
    ]

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