import React, { Component } from 'react'

export class TimeElapsed extends Component {

    getunits(){
        const seconds=this.props.timeElapsed/1000;
        return{
            hr:Math.floor(seconds/3600).toString(),
            min:Math.floor(seconds/60).toString(),
            sec:Math.floor(seconds%60).toString(),
            msec:(seconds%1).toFixed(3).substring(2)
        };
    }


    render() {
        const units = this.getunits();
        return (
            <div id={this.props.id}>
            <span>{units.hr<10?'0'+units.hr:units.hr}:</span>
            <span>{units.min<10?'0'+units.min:units.min}:</span>
        <span>{units.sec<10?'0'+units.sec:units.sec}.</span>
        <span>{units.msec}</span>            
            </div>
        )
    }
}

export default TimeElapsed
