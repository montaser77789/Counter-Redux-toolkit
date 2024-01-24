/* eslint-disable react-refresh/only-export-components */
import { memo, useState } from "react";
import Button from "./Button";

function Counter() {
    const [Count , setCount]=useState(1)
    return (
    <>
    <div className="flex flex-col items-center justify-center mb-7">

 <h3>count: {Count}</h3>
  <div >
    <Button onClick={()=>setCount(prev => prev+1)}>
        Counter
    </Button>
 </div>
    </div>
    </>  );
}

export default memo(Counter);