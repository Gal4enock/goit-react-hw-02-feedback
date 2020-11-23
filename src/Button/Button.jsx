import React from 'react';
import style from './Button.module.css';

const Button = function ({name}) {
  return (
    <button className={style.btn} type='button'>{name}</button>
 )
}

export default Button