import React from "react";
import { Link } from "react-router-dom";

import Cell from "./Cell"

import './Batteries.css';

class Batteries extends React.Component{
    constructor(){
        super();
        let cellData = []
        for(var i = 1; i <= 24; i++){
            cellData.push({
                cellNum: i,
                voltage: 0,
                temperature: 0
            })
        }
        this.state = {
            cellData:cellData
        }
    }

    componentDidMount(){
    }

    cellRow(startNum, endNum){
        let row = []
        for (var i = startNum; i <= endNum; i++){
            let cell = this.state.cellData[i]
            row.push(<Cell cellNum={cell.cellNum} voltage={cell.voltage} temperature={cell.temperature} ></Cell>)
        }
        return row
    }

    render(){
        let row1 = this.cellRow(0, 11);
        let row2 = this.cellRow(12, 23);
        return (
            <div>
                <div class="cell-row">{row1}</div>
                <div class="cell-row">{row2}</div>
            </div>
        )
    }
}

export default Batteries;