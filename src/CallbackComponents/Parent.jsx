import Decrementor from "./Decrementor";
import Title from "./Title";
import Button from "./Button";
import React, { useCallback } from "react";
import { useState} from "react";

const Parent = () =>{
    const [incrementor, setIncrementor] = useState(0)
    const [decrementor, setDecrementor] = useState(0)

    const handleIncrement= useCallback(()=>{
        setIncrementor(incrementor+1)
    },[incrementor])
    const handleDecrement= useCallback(()=>{
        setDecrementor(decrementor-1)
    },[decrementor])
        console.log(" Rendering Parent")

    return(
        <>
       <Title/>
       <Decrementor text="Incrementor" value={incrementor}/>
       <Button handleClick={handleIncrement}>Increment</Button>
       <Decrementor text="Decerementor" value={decrementor}/>
       <Button handleClick={handleDecrement}>Decrement</Button>
        </>
    )
}

export default React.memo(Parent);