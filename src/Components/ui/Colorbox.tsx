/* eslint-disable react-refresh/only-export-components */
import { memo } from "react";

interface Ipropse {
    colorobj:{
        background:string,
        color:string
    }
}


function Colorbox({colorobj} : Ipropse) {

    return ( 
    <>
    <div className="flex items-center justify-center w-20 h-20 rounded-md mb-2" 
    style={{background:colorobj.background , color:colorobj.color}}>
        <span>Bix</span>

    </div>
    
    </> );
}

export default memo(Colorbox)