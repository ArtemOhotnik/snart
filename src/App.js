import './App.css';
import React from "react";
import Main from "./contant/main/main";
import Art from "./contant/Art/art";
import Cont from "./contant/Contact/cont";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    NavLink,
} from "react-router-dom";


function App() {
        return (

            <div>
                <Router>

                    <header className={"box-1"}>

                        <NavLink to="/"><h5 className={"main"}>Main</h5></NavLink>
                        <NavLink to="/art"><h5 className={"art"}>Article</h5></NavLink>
                        <NavLink to="/contact"><h5 className={"cont"}>Contact</h5></NavLink>


                    </header>

                    <Switch>
                        <Route exact path="/"> <Main/> </Route>
                        <Route path="/art"> <Art/> </Route>
                        <Route path="/contact"> <Cont/> </Route>
                    </Switch>
                </Router>
            </div>
        );

}

export default App;
