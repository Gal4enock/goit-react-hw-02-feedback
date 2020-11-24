import React from 'react';
import Button from '../Button/Button';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div onClick={onLeaveFeedback}>
    <Button  name={options.GOOD} />
    <Button name={options.NEUTRAL} />
    <Button name={options.BAD} />

  </div>
)
export default FeedbackOptions;