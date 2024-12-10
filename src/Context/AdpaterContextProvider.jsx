import React, { useState } from "react";

import Adaptercontext from './Adaptercontext'

 const AdaptercontextProvider=({children})=>{
    const[amqadapter,setamqAdapterprop]=useState(null);
    const[ibmadapter,setibmAdapterprop]=useState(null);
    const[kafkaadapter,setkafkaAdapterprop]=useState(null);
    const[restadapter,setrestAdapterprop]=useState(null);
    const[flownodes,setflownodes]=useState(null);
    const[flowedges,setflowedges]=useState(null);

    return(
        <Adaptercontext.Provider value={{amqadapter,setamqAdapterprop,ibmadapter,setibmAdapterprop,restadapter,setrestAdapterprop,kafkaadapter,setkafkaAdapterprop,
            flowedges,setflowedges,flownodes,setflownodes
        }}>
                {children}
        </Adaptercontext.Provider>
    )

}
export default AdaptercontextProvider

