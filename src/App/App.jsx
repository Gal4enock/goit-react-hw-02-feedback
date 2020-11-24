import React, { Component } from 'react';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import Notification from '../Notification/Notification';
import style from './App.module.css';

const options = {
  en: {
    GOOD: 'good',
    BAD: 'bad',
    NEUTRAL: 'neutral'
  },
  ru: {
    GOOD: 'хорошо',
    BAD: 'плохо',
    NEUTRAL: 'так се'
 }

}

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  
  onLeaveFeedback = (e) => {
    const feedbackType = e.target.textContent;
    console.log(feedbackType);
    switch (feedbackType) {
      case "good":
        this.setState((state) => ({
          good: state.good + 1
        }));
        break;
      case "neutral":
        this.setState((state) => ({
          neutral: state.neutral + 1
        }));
        break;
      case "bad":
        this.setState((state) => ({
          bad: state.bad + 1
        }));
        break;
      default:
        console.log('Hello!');
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
    // const total = this.countTotalFeedback();
    // const perc = this.countPositiveFeedbackPercentage();
        return (  
      <div className={style.box} >
          <h1>Please leave feedback</h1>
            
          <FeedbackOptions options={options.en} onLeaveFeedback={this.onLeaveFeedback} />
          
          {!this.countTotalFeedback() ? <Notification message="No feedback given" /> : <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()} />}
      </div>
    )
    
  }
}

export default App;
