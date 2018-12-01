import React from 'react';

class Clock extends React.Component {
  constructor(props) {
   super(props);
   this.state = {
     time: new Date()
   };
   this.tick = this.tick.bind(this);
 }

 componentDidMount () {
    this.intervalId = setInterval(this.tick, 1000);
 }
 
 componentWillUnmount() {
  clearInterval(this.intervalId);
}
 
  tick () {
    this.setState({time: new Date()});
  }
  
  render () {
   let hours = this.state.time.getHours();
   let minutes = this.state.time.getMinutes();
   let seconds = this.state.time.getSeconds();

   hours = (hours < 10) ? `0${hours}` : hours;
   minutes = (minutes < 10) ? `0${minutes}` : minutes;
   seconds = (seconds < 10) ? `0${seconds}` : seconds;
    return (
      <div>  
      <h2>Clock</h2>
      <span>{hours}:{minutes}:{seconds} PDT
             </span>
          
          <p>Date: {this.state.time.toDateString()}</p>
      </div>
    );
  }
}
export default Clock;