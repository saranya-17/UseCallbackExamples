import React from "react";
const Decrementor = ({text, value}) =>{
    {
        console.log("Rendering", text)
    }
    return(
        <>
        <div style={{textAlign:"center", padding:"10px"}}>
            {text} : {value}
        </div>
        </>
    )
}

export default React.memo(Decrementor);