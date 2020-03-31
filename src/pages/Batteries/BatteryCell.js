import React from "react";
import PropTypes from "prop-types";

import './Batteries.css';

class BatteryCell extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    componentDidMount(){}

    inValid(){
        const vLow = 2.8;
        const vHigh = 4.2;
        const tLow = 5;
        const tHigh = 75;
        let vIn = this.props.voltage;
        let temp = this.props.temperature;

        if(vIn < vLow || vIn > vHigh)
            return true;
        if(temp < tLow || temp > tHigh)
            return true;
        return false;
    }

    render(){
        var className = "b-cell-normal";
        if(this.inValid())
            className = "b-cell-abnormal";

        return (
            <div>
                <div className={className}>
                    <div>Cell {this.props.cellNum}</div>
                    <div>V: {this.props.voltage}</div>
                    <div>Temp: {this.props.temperature}</div>
                </div>
            </div>
        )
    }
}

export default BatteryCell;

BatteryCell.propTypes = {
    cellNum: PropTypes.number,
    voltage: PropTypes.number,
    temperature: PropTypes.number
}