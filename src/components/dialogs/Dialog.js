import React from 'react';
import cl from './Dialog.module.css';
import { NavLink } from 'react-router-dom';



const DialogItem = (props) => {
  return (
    <div className={cl.dialog}>
      <NavLink to={"/dialogs/"+props.id} activeClassName={cl.active}>{props.name}</NavLink>
    </div>
  )
}

const Message =(props) =>{
  return(
  <div className={cl.message}>{props.message}</div>
  )
}

class Dialog extends React.Component {
  render() {
    return (
      <div className={cl.dialogs}>
        <div className={cl.dialogItem}>

          <DialogItem  name="Вячеслав" id="21"/>
          <DialogItem  name="Николай" id="1"/>
          <DialogItem  name="Наталья" id="2"/>
          <DialogItem  name="Василий" id="3"/>
          <DialogItem  name="Екатерина" id="4"/>
          <DialogItem  name="Петр" id="5"/>
          <DialogItem  name="Светлана" id="6"/>
          <DialogItem  name="Сергей" id="7"/>

          
          

        </div>
        <div className={cl.messages}>
          <Message message="Че каво?"/>
          <Message message="привет , ну как то ттак, ничего очобенного"/>
          <Message message="Ну давай . мног не давай"/>

        </div>

      </div>
    );
  }
}

export default Dialog;