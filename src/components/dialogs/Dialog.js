import React from 'react';
import cl from './Dialog.module.css';

class Dialog extends React.Component {
  render() {
    return (
      <div className={cl.dialogs}>
        <div className={cl.dialogItem}>
          <div className={cl.dialog +' '+cl.active}>
            Николай
          </div>
          <div className={cl.dialog}>
            Наталья
          </div>
          <div className={cl.dialog}>
            Василий
          </div>
          <div className={cl.dialog}>
            Екатерина
          </div>
          <div className={cl.dialog}>
            Петр
          </div>
          <div className={cl.dialog}>
            Светлана
          </div>
          <div className={cl.dialog}>
            Сергей
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