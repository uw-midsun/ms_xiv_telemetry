import React from "react";
import PropTypes from "prop-types";

import './SolarPanels.css';

class SolarCell extends React.Component{
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
        let vIn = this.props.voltageIn;
        let vOut = this.props.voltageOut;
        let temp = this.props.temperature;

        if(vIn < vLow || vIn > vHigh)
            return true;
        if(vOut < vLow || vOut > vHigh)
            return true;
        if(temp < tLow || temp > tHigh)
            return true;
        return false;
    }

    render(){
        var className = "s-cell-normal";
        if(this.inValid())
            className = "s-cell-abnormal";

        return (
            <div>
                <div className={className}>
                    <div>Cell {this.props.cellNum}</div>
                    <div>V-In: {this.props.voltageIn}</div>
                    <div>V-Out: {this.props.voltageOut}</div>
                    <div>Temp: {this.props.temperature}</div>
                </div>
            </div>
        )
    }
}

export default SolarCell;

SolarCell.propTypes = {
    cellNum: PropTypes.number,
    voltageIn: PropTypes.number,
    voltageOut: PropTypes.number,
    temperature: PropTypes.number
}