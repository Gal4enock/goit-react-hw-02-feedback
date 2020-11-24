import React from 'react';
import style from '../Item/Item.module.css'


const Item = function ({ value, name }) {
  return (
    <li className={style.item}>{name} {value}</li>
 )
}
export default Item