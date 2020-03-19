import React from "react";
import PropTypes from "prop-types";

import './Batteries.css';

class BatteryCell extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    componentDidMount(){}

    render(){
        return (
            <div>
                <div className="b-cell">
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