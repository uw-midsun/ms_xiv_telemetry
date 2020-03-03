import React from "react";
import { Link } from "react-router-dom";

import './Batteries.css';

class Cell extends React.Component{
    constructor(){
        super();
        this.state = {}
    }

    componentDidMount(){}

    render(){
        return (
            <div>
                <div className="cell">Cell 01</div>
            </div>
        )
    }
}

export default Cell;