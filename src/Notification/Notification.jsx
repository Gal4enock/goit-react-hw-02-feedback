import React from 'react';
import style from './Notification.module.css';

const Notification = ({message}) => (
  <div className={style.noFeedback}>
   { message}
  </div>
)
export default Notification;