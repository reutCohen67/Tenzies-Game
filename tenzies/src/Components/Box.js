import React, { useState } from "react";
import '../styles/box.css'

function Box(props){


    const style = {

        backgroundColor : props.checked ? "aquamarine" : "white",
        borderStyle: "solid",
        borderColor: "coral",
        width : "50px",
        height: "50px",

    }

    return(
        <div style={style} className="boxes-items" onClick={props.handleClick}>
            <div  className="box">
              <p>{props.number}</p> 
            </div>
        </div>
    )

}

export default Box;