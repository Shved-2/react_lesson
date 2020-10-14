import React from 'react';
import cl from './../Dialog.module.css';
import { NavLink } from 'react-router-dom';





class DialogItem extends React.Component {
  render() {
    let pr = this.props;
    return (
      <div className={cl.dialog}>
        <NavLink to={"/dialogs/" + pr.id} activeClassName={cl.active}>{pr.name}</NavLink>
      </div>
    )
  }
}

/*
const DialogItem = (props) => {
  return (
    <div className={cl.dialog}>
      <NavLink to={"/dialogs/" + props.id} activeClassName={cl.active}>{props.name}</NavLink>
    </div>
  )
}
*/


export default DialogItem;