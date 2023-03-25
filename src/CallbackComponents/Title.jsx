import React from "react";
const Title=()=>{
    return(
        <>
        {
            console.log("Rendering Title")
        }
        <div>
            <h1 style={{color:"cadetblue"}}>Use Callback</h1>
        </div>
        </>
    )
}
export default React.memo(Title);