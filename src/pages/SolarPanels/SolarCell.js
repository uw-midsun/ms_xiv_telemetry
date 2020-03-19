import React from "react";
import PropTypes from "prop-types";

import './SolarPanels.css';

class SolarCell extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    componentDidMount(){}

    render(){
        return (
            <div>
                <div className="s-cell">
                    <div>Cell {this.props.cellNum}</div>
                    <div>V: {this.props.voltage}</div>
                    <div>Temp: {this.props.temperature}</div>
                </div>
            </div>
        )
    }
}

export default SolarCell;

SolarCell.propTypes = {
    cellNum: PropTypes.number,
    voltage: PropTypes.number,
    temperature: PropTypes.number
}