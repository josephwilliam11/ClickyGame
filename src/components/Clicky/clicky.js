import React from "react";
import "./clicky.css";



const Clicky = props => (
    <div className="card">
        <div className="img-container">
            
            <img  onClick={() => props.clickyFunction(props.id)} alt={props.name} src={props.image} />
        
        </div>
    </div>
);

export default Clicky;
