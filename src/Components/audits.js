import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Style/Configuration/audits.css'
import { useLocation, useParams } from 'react-router-dom';
import HeaderTwo from '../Components/headerTwo'

export default function Auditres() {
  const [responseDataList, setResponseDataList] = useState([]);
//   const { scenarioId, scenarioName, countryCode } = useParams();
const location = useLocation();
const { flowId, flowName, region } = location.state || {};
  
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (flowId && flowName && region) {
          const getScenarioDetailsUrl = `http://172.17.1.72:9090/audits?flowId=${flowId}&flowName=${flowName}&region=${region}`;
          const response = await axios.get(getScenarioDetailsUrl);
          setResponseDataList(response.data);
          console.log(response);
        }
      } catch (error) {
        console.log("Error retrieving data:", error.message);
      }
    };

    fetchData();
  }, [flowId, flowName, region]);

  const handleRefresh = () => {
    window.location.reload();
  };

  const renderPayload = (payload) => {
    if (typeof payload === 'object' || Array.isArray(payload)) {
      return (
        <pre>
          {JSON.stringify(payload, null, 2)}
        </pre>
      );
    } else {
      return <span>{payload}</span>;
    }
  };

  return (
    <>
    <HeaderTwo></HeaderTwo>
    <div style={{ marginTop: '6rem' }}>
      <div className='FlowBody'>
        <table className='AuditsTable'>
          <thead>
            <tr>
              <th>inboundQueue</th>
              <th>outboundQueue</th>
              <th>sourceTimeStamp</th>
              <th>targetTimeStamp</th>
              {/* <th>auditStatus</th> */}
              <th>Stages</th>
              <th>Payload</th>
            </tr>
          </thead>
          <tbody>
            {responseDataList.map((item, index) => (
              <tr key={index}>
                 <td>{item.inboundQueue}</td>
                 <td>{item.outboundQueue}</td>
                 <td>{item.sourceTimeStamp}</td>
                 <td>{item.targetTimeStamp}</td>
                <td>{item.stages}</td>
                <td>
                  <div style={{ overflowY: 'auto',overflowX: 'hidden', scrollbarWidth: 'thin', maxHeight: '50px' }}>
                  {renderPayload(item.payload)}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
}
