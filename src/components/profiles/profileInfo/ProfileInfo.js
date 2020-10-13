import React from 'react';
import cl from './ProfileInfo.module.css';

class ProfileInfo extends React.Component {
  render() {
    return (
      <div className={cl.content}>
        <div>
          <img src="https://icocnews.ru/wp-content/uploads/2015/09/priroda.jpg" />
          
        </div>
        <div className={cl.descriprion}>
          ava + description
        </div>
      </div>

    );
  }
}

export default ProfileInfo;