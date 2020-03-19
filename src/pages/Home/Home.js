import React from "react";
import { Link } from "react-router-dom";

import './Home.css';

class Home extends React.Component{
    constructor(){
        super();
        this.state = {}
    }

    componentDidMount(){}

    render(){
        return (
            <div className="features-list">
                <Link to="/Batteries/">
                    <button className="feature-button">Batteries</button>
                </Link><br/>
                <Link to="/SolarPanels/">
                    <button className="feature-button">Solar Panels</button>
                </Link>
                <Link to="/PowerDistribution/">
                    <button className="feature-button">Power Distribution</button>
                </Link><br/>
            </div>
        )
    }
}

export default Home;