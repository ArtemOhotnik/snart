import React from "react";
import './art.css'
import "react-router-dom";

class Art extends React.Component {

    render() {
    return(
        <div className={"bc"}>


            <div className={"box-2"}>

                <h1 className={"text-1"} >Article</h1>
                <p> </p>
                <h4 className={"text"}>
                  Hello
                </h4>

                <p> </p>
                <div className={"buttonNExt"}>

                <button className={"button"}>-</button>
                <button className={"button"}>+</button>

                </div>
                <p> </p>


            </div>

            <div className={"box-3"}>
                <footer>
                    <h7  className={"foot"}>Copyright © 2021</h7>
                </footer>
            </div>
        </div>
    );
}
}

export default Art;