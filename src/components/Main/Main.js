import React from "react";
import { Switch, Route} from "react-router-dom";
import Home from "../../pages/Home/Home";
import Batteries from "../../pages/Batteries/Batteries";
import SolarPanels from "../../pages/SolarPanels/SolarPanels";
import PowerDistribution from "../../pages/PowerDistribution/PowerDistribution";


function Main(){
    return (
        <main>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/Batteries/" component={Batteries}/>
                <Route path="/SolarPanels/" component={SolarPanels}/>
                <Route path="/PowerDistribution/" component={PowerDistribution}/>
            </Switch>
        </main>
    );
}

export default Main;