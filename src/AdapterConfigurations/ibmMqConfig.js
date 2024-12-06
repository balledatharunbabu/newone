import React, { useState } from 'react';
import '../Style/Configuration/AdapterConfigStyle.css';

const IbmMqConfig = () => {
  const [showProperties, setShowProperties] = useState(false);

  const toggleProperties = () => {
    setShowProperties(!showProperties);
  };

  return (
    <div className="configBox">
      <div className="header" style={{backgroundColor:'rgb(88, 90, 148  )'}}>IbmMQ Configuration</div>
      <form>
        <table>
          <tbody>
            <tr>
              <td>Queue Manager:</td>
              <td><input type="text" placeholder="Enter Queue Manager Name" /></td>
            </tr>
            <tr>
              <td>Queue Name:</td>
              <td><input type="text" placeholder="Enter Queue Name" /></td>
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
                <td>Channel</td>
                <td><input type="text" placeholder="Enter Channel" /></td>
              </tr>
              <tr>
                <td>Connection Name</td>
                <td><input type="text" placeholder="Connection Name" /></td>
              </tr>
              <tr>
                <td>Username:</td>
                <td><input type="text" placeholder="Enter Username" /></td>
              </tr>
              <tr>
                <td>Password:</td>
                <td><input type="password" placeholder="Enter Password" /></td>
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

export default IbmMqConfig;
