import React, { useState } from 'react';
import '../Style/Configuration/AdapterConfigStyle.css';

const KafkaConfig = () => {
  const [showProperties, setShowProperties] = useState(false);

  const toggleProperties = () => {
    setShowProperties(!showProperties);
  };

  return (
    <div className="configBox">
      <div className="header" style={{backgroundColor:'rgb(88, 90, 148  )'}}>Kafka Configuration</div>
      <form>
        <table>
          <tbody>
            <tr>
              <td>Topic Name:</td>
              <td><input type="text" placeholder="Enter Topic Name" /></td>
            </tr>
            
          </tbody>
        </table>
        <div className="toggleButton" onClick={toggleProperties} style={{backgroundColor:'rgb(88, 90, 148  )'}}>
          Properties
        </div>
        {showProperties && (
            <>
          <table>
            <tbody>
              <tr>
                <td>Broker URL:</td>
                <td><input type="text" placeholder="Enter Broker URL" /></td>
              </tr>
             
            </tbody>
          </table>
          <center><button type="submit" className="submitButton" style={{backgroundColor:'#434779'}}>Submit</button></center>
          </>
        )}
       
      </form>
    </div>
  );
};

export default KafkaConfig;
