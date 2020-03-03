import React from "react";
import { Link } from "react-router-dom";

import Cell from "./Cell"

import './Batteries.css';

class Batteries extends React.Component{
    constructor(){
        super();
        this.state = {}
    }

    componentDidMount(){}

    cellRow(startNum, endNum){
        for (var i = startNum; i <= endNum; i++){}
    }

    render(){
        return (
            <div>
                <div class="cell-row">
                    <Cell></Cell>
                    <Cell></Cell>
                    <Cell></Cell>
                    <Cell></Cell>
                    <Cell></Cell>
                    <Cell></Cell>
                    <Cell></Cell>
                    <Cell></Cell>
                    <Cell></Cell>
                    <Cell></Cell>
                    <Cell></Cell>
                    <Cell></Cell>
                </div>
                <div class="cell-row">
                    <Cell></Cell>
                    <Cell></Cell>
                    <Cell></Cell>
                    <Cell></Cell>
                    <Cell></Cell>
                    <Cell></Cell>
                    <Cell></Cell>
                    <Cell></Cell>
                    <Cell></Cell>
                    <Cell></Cell>
                    <Cell></Cell>
                    <Cell></Cell>
                </div>
            </div>
        )
    }
}

export default Batteries;