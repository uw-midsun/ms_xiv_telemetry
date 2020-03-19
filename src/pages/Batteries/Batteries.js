import React from "react";

import BatteryCell from "./BatteryCell"

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
            row.push(<BatteryCell cellNum={cell.cellNum} voltage={cell.voltage} temperature={cell.temperature} key={i}></BatteryCell>)
        }
        return row
    }

    render(){
        let row1 = this.cellRow(0, 11);
        let row2 = this.cellRow(12, 23);
        return (
            <div>
                <div className="cell-row">{row1}</div>
                <div className="cell-row">{row2}</div>
            </div>
        )
    }
}

export default Batteries;