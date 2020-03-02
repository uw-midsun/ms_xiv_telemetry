import React from "react";
import { Link } from "react-router-dom";
import homeLogo from "./home_logo.png";
import './Header.css';

class Header extends React.Component{

    constructor(){
        super();
        this.state = {
            driveStates:{
                reverse: 'Reverse',
                forward: 'Forward',
                drive: 'Drive',
                parking: 'Parking'
            },
            currentDriveState: 'Parking'
        }
    }

    render(){
        return (
            <header>
                <Link to="/">
                    <div className="home-button">
                        <img src={homeLogo} alt="Home"/>
                    </div>
                </Link>
                <div className="driveState">Drive State: {this.state.currentDriveState}</div>
            </header>
        );
    }
}


export default Header;