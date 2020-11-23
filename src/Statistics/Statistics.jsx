import React from 'react';
import style from '../Statistics/Statistics.module.css'


const Statistics = function ({ value, name }) {
  return (
    <li className={style.item}>{name} {value}</li>
 )
}
export default Statistics