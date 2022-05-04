import React, { useState } from "react";
import "../css/Light.css";


const Light = ({nombre, classCss})=>{
    const [classColor, setClassColor] = useState("normal");

    return(
        <div>
            <h3 className={classColor}>{nombre}</h3>
            <button onClick={()=>setClassColor(classCss)}>Encender</button>
            <button onClick={()=>setClassColor("normal")}>Apagar</button>
        </div>
    );
}

export default Light;