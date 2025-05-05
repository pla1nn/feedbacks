import { Component } from 'react';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  GoodFeedback = () => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
  };

  NeutralFeedback = () => {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  };

  BadFeedback = () => {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return this.countTotalFeedback()
      ? Math.round((this.state.good / this.countTotalFeedback()) * 100)
      : 0;
  };

  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <div>
            <button onClick={this.GoodFeedback}>Good</button>
            <button onClick={this.NeutralFeedback}>Neutral</button>
            <button onClick={this.BadFeedback}>Bad</button>
          </div>
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              percentage={this.countPositiveFeedbackPercentage()}
            ></Statistics>
          )}
        </Section>
      </div>
    );
  }
}
