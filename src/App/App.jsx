import React, { Component } from 'react';
import Button from '../Button/Button';
import Statistics from '../Statistics/Statistics';
import style from './App.module.css'

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  
  addFeedback = (e) => {
    const feedbackType = e.target.textContent;
    console.log(feedbackType);
    switch (feedbackType) {
      case "good":
        this.setState({
          good: this.state.good + 1
        });
        break;
      case "neutral":
        this.setState({
          neutral: this.state.neutral + 1
        });
        break;
      case "bad":
        this.setState({
          bad: this.state.bad + 1
        });
        break;
    }
  }

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
   return (good + neutral + bad); 
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    const total = this.countTotalFeedback()
    const pers = (good > 0 ? Math.round((good * 100) / total) : 0);
    
    return ( `${pers} %` )
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const perc = this.countPositiveFeedbackPercentage();
    return (
      <div className={style.box} onClick = {this.addFeedback}>
        <h1>Please leave feedback</h1>
          <Button  name="good" />
          <Button name="neutral" />
          <Button name="bad" />
        <h2>Statistics</h2>
        <ul>
          <Statistics name="Good:" value={good} />
          <Statistics name="Neutral:" value={neutral} />
          <Statistics name="Bad:" value={bad} />
          <Statistics name="Total:" value={total} />
          <Statistics name = "Positive feedback:" value = {perc} />
        </ul> 
      </div>
    )
    
  };
}

export default App;
