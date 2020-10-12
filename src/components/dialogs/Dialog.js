import React from 'react';
import cl from './Dialog.module.css';
import { NavLink } from 'react-router-dom';

class Dialog extends React.Component {
  render() {
    return (
      <div className={cl.dialogs}>
        <div className={cl.dialogItem}>
          <div className={cl.dialog + ' ' + cl.active}>
            <NavLink to="/dialogs/1">Николай</NavLink>
          </div>
          <div className={cl.dialog}>
            <NavLink to="/dialogs/2">Наталья</NavLink>
          </div>
          <div className={cl.dialog}>
            <NavLink to="/dialogs/3">Василий</NavLink>
          </div>
          <div className={cl.dialog}>
            <NavLink to="/dialogs/4"> Екатерина</NavLink>
          </div>
          <div className={cl.dialog}>
            <NavLink to="/dialogs/5">Петр</NavLink>
          </div>
          <div className={cl.dialog}>
            <NavLink to="/dialogs/6">Светлана</NavLink>
          </div>
          <div className={cl.dialog}>
            <NavLink to="/dialogs/7">Сергей</NavLink>
          </div>

        </div>
        <div className={cl.messages}>
          <div className={cl.message}>Че каво?</div>
          <div className={cl.message}>привет , ну как то ттак, ничего очобенного</div>
          <div className={cl.message}>Ну давай . мног не давай</div>

        </div>

      </div>
    );
  }
}

export default Dialog;