import React, { Component } from 'react'
import './App.css';
import LapTimes from './Comp/LapTimes';
import TimeElapsed from './Comp/TimeElapsed';

export class App extends Component {

  constructor(props){

    super(props);
    ["lap","update","reset","toggle"].forEach((method)=>{
      this[method]=this[method].bind(this);
    });

    this.state=this.intialState={
      isRunning:false,
      lapTimes:[],
      timeElapsed:0,
    };
  }

  toggle(){
    this.setState({isRunning:!this.state.isRunning},()=>{
      this.state.isRunning?this.startTimer():clearInterval(this.timer)
    })
  }

  lap(){
    const {lapTimes,timeElapsed}=this.state;
    this.setState({lapTimes:lapTimes.concat(timeElapsed)})
  }

  reset(){
    clearInterval(this.timer);
    this.setState(this.intialState);
  }

  startTimer(){
    this.startTime=Date.now();
    this.timer=setInterval(this.update,10);
  }
  update(){
    const curr=Date.now()-this.startTime;
    this.setState({timeElapsed:this.state.timeElapsed+curr});
    this.startTime=Date.now();
    console.log(this.state.timeElapsed)
  }

  
  render() {
    const{isRunning,lapTimes,timeElapsed}=this.state;
    return (
      <div className="container">
        <a href="https://github.com/ranjitkshah/s8-stopwatch" >

        <img src="https://img.icons8.com/bubbles/50/000000/github.png" alt="git-link"/>
        </a>
        <h1>STOPWATCH</h1>
        <TimeElapsed id="timer" timeElapsed={timeElapsed}/>
        <div>
        <button onClick={this.toggle} >
          {isRunning?'stop':'start'}
        </button>
        <button onClick={isRunning?this.lap:this.reset} disabled={!isRunning&&!timeElapsed} >
          {isRunning||!timeElapsed?'Lap':'reset'}
        </button>
        </div>
        {lapTimes.length>0&&<LapTimes lapTimes={lapTimes} />}
      </div>
    )
  }
}

export default App
