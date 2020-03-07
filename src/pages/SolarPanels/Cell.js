import React from "react";
import { Link } from "react-router-dom";

import './SolarPanels.css';

class Cell extends React.Component{
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

export default Cell;