import React, { useState } from "react";

import Adaptercontext from './Adaptercontext'

const AdaptercontextProvider=({children})=>{
    const[amqadapter,setamqAdapterprop]=useState(null);
    const[amqadapterout,setamqAdapterpropout]=useState(null);
    const[ibmadapter,setibmAdapterprop]=useState(null);
    const[ibmadapterout,setibmAdapterpropout]=useState(null);
    const[kafkaadapter,setkafkaAdapterprop]=useState(null);
    const[kafkaadapterout,setkafkaAdapterpropout]=useState(null);
    const[restadapter,setrestAdapterprop]=useState(null);
    const[restadapterout,setrestAdapterpropout]=useState(null);
    const[flownodes,setflownodes]=useState(null);
    const[flowedges,setflowedges]=useState(null);
    const[transdata,setTransData]=useState(null);

    const [AmqFinalOutboundForm,setAmqFinalOutboundForm]=useState([])

    const [IBMFinalOutboundForm,setIBMFinalOutboundForm]=useState([])

    const [KafkaFinalOutboundForm,setKafkaFinalOutboundForm]=useState([])

    const [RestFinalOutboundForm,setRestFinalOutboundForm]=useState([])



    return(
        <Adaptercontext.Provider value={{amqadapter,setamqAdapterprop,ibmadapter,setibmAdapterprop,restadapter,setrestAdapterprop,kafkaadapter,setkafkaAdapterprop,
            flowedges,setflowedges,flownodes,setflownodes,
            amqadapterout,setamqAdapterpropout,
            ibmadapterout,setibmAdapterpropout,
            kafkaadapterout,setkafkaAdapterpropout,
            restadapterout,setrestAdapterpropout,transdata,setTransData,AmqFinalOutboundForm,setAmqFinalOutboundForm,
            IBMFinalOutboundForm,setIBMFinalOutboundForm,
            KafkaFinalOutboundForm,setKafkaFinalOutboundForm,
            RestFinalOutboundForm,setRestFinalOutboundForm

        }}>
                {children}
        </Adaptercontext.Provider>
    )

}
export default AdaptercontextProvider