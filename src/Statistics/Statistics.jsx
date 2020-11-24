import React from 'react';
import Item from '../Item/Item.jsx';
import Section from '../Section/Section'

const Statistics = function (prop) {
  return (
    <Section title="Statistics">
        <ul>
          <Item name="Good:" value={prop.good} />
          <Item name="Neutral:" value={prop.neutral} />
          <Item name="Bad:" value={prop.bad} />
          <Item name="Total:" value={prop.total} />
          <Item name = "Positive feedback:" value = {prop.positivePercentage} />
        </ul> 
   </Section>
 )
}
export default Statistics;