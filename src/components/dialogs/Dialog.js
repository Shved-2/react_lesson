import React from 'react';
import cl from './Dialog.module.css';
import { NavLink } from 'react-router-dom';



const DialogItem = (props) => {
  return (
    <div className={cl.dialog}>
      <NavLink to={"/dialogs/" + props.id} activeClassName={cl.active}>{props.name}</NavLink>
    </div>
  )
}

const Message = (props) => {
  return (
    <div className={cl.message}>{props.message}</div>
  )
}

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
    return (
      <div className={cl.dialogs}>
        <div className={cl.dialogItem}>

          <DialogItem name={dialogData[0].name} id={dialogData[0].id} />
          <DialogItem name={dialogData[1].name} id={dialogData[1].id} />
          <DialogItem name={dialogData[2].name} id={dialogData[2].id} />
          <DialogItem name={dialogData[3].name} id={dialogData[3].id} />
          <DialogItem name={dialogData[4].name} id={dialogData[4].id} />
          <DialogItem name={dialogData[5].name} id={dialogData[5].id} />
          <DialogItem name={dialogData[6].name} id={dialogData[6].id} />
          <DialogItem name={dialogData[7].name} id={dialogData[7].id} />





        </div>
        <div className={cl.messages}>
          <Message message={messagesData[0].message} />
          <Message message={messagesData[1].message} />
          <Message message={messagesData[2].message} />
          <Message message={messagesData[3].message} />
          <Message message={messagesData[4].message} />

        </div>

      </div>
    );
  }
}

export default Dialog;