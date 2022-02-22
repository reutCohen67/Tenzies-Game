import React, { useState } from "react";
import '../App.css';


function Box(props){


    const style = {

        backgroundColor : props.checked ? "aquamarine" : "white",
        borderStyle: "solid",
        width : "60px",
        height: "60px",
        borderRadius: "10px",
        fontWeight:"bold",
        fontSize:"25px"
    }

    return(
        <div style={style} className="box" onClick={props.handleClick}>
              {props.number}
        </div>
    )

}

export default Box;