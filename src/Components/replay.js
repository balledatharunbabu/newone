import React, { useState, useEffect } from 'react';
import axios from "axios";
import '../Style/Configuration/Replay.css';
import HeaderTwo from '../Components/headerTwo'
const ViewReplay = () => {
    const [details, setDetails] = useState([]);
    const showReplays= () => {
        const scenarioDetailsUrl = `http://172.17.2.77:9090/getAllReplays`;
        
        axios.get(scenarioDetailsUrl)
            .then(response => {
                setDetails(response.data);
                console.log(response.data);
            })
            .catch(error => console.error('Error fetching data:', error));
    };
    useEffect(() => {   showReplays(); }, []); 

    const handleReplay = (flowId, exceptionRoute) => {
        console.log(flowId,exceptionRoute)
        const replayUrl = `http://172.17.2.77:9090/getReplay?flowId=${flowId}&exceptionRoute=${exceptionRoute}`;
        axios.get(replayUrl)
            .then(response => {
                console.log(response.data);
                showReplays();
            })
            .catch(error => console.error('Error fetching data:', error));
    };
    

    return (
        <>
        <HeaderTwo></HeaderTwo>
        <div class="container">
        <div className='Replays'>
            {details.map((item, index) => (
                    <div key={index} className='eachBox'>
                        <p><span style={{fontSize:'bold'}}>Flow:</span> {item.flowId}.{item.flowName}.{item.region}</p>
                        <p>Exception: {item.exceptionRoute}</p>
                        <button className='replayBtn' 
                         onClick={() => handleReplay(item.flowId, item.exceptionRoute)}>Replay</button>
                       
                    </div>
            ))}
        </div>
        </div>
        </>
    );
};

export default ViewReplay;
