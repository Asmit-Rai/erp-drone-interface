"use client"
import dynamic from "next/dynamic";

const LiveDroneMap = dynamic(()=>  import("./LiveDroneMap"),{
    ssr:false,

})

 const MapView= ()=>
 {
    return(
        <div>
            <LiveDroneMap/>
        </div>
    )

 }

 export default MapView;