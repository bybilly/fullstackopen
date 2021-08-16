import React, { useState } from "react";

const Button = ({ onClick, text }) => <button onClick = { onClick }>{ text }</button>;

const StatisticLine = ({text, value}) => 
  <tr>
    <td>{ text }</td>
    <td>{ value }</td>
  </tr>;

const Statistics = ({ stats }) => {
  if (stats[3] === 0) return <div>No feedback given</div>;
  return (
    <div>
      <table>
        <tbody>
          <StatisticLine text = "good" value = { stats[0] } />
          <StatisticLine text = "neutral" value = { stats[1] } />
          <StatisticLine text = "bad" value = { stats[2] } />
          <StatisticLine text = "all" value = { stats[3] } />
          <StatisticLine text = "average" value = { stats[4] } />
          <StatisticLine text = "positive" value = { stats[5] + " %" } />
        </tbody>
      </table>
    </div>
  );
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const incrementGood = () => setGood(good + 1);
  const incrementNeutral = () => setNeutral(neutral + 1);
  const incrementBad = () => setBad(bad + 1);

  const total = good + neutral + bad;
  const average = (good - bad) / total;
  const positive = good * 100 / total;

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick = { incrementGood } text = "good" />
      <Button onClick = { incrementNeutral } text = "neutral" />
      <Button onClick = { incrementBad } text = "bad" />

      <h1>statistics</h1>
      <Statistics stats = {[good, neutral, bad, total, average, positive]} />
    </div>
  );
}

export default App;
