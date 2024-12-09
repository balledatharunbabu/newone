import React, { useState } from 'react';
import '../Style/Configuration/AdapterConfigStyle.css';

const AmqConfig = () => {
  const [showProperties, setShowProperties] = useState(false);

  const[amqconfig,AmqConfigprop]=useState({
    
  });


  const toggleProperties = () => {
    setShowProperties(!showProperties);
  };

  return (
    <div className="configBox" style={{overflowY: 'auto',overflowX: 'hidden', scrollbarWidth: 'thin', maxHeight: '30vh'}}>
      <div className="header" style={{backgroundColor:'rgb(88, 90, 148  )'}}>JMS Configuration</div>
      <form>
        <table>
          <tbody>
            <tr>
              <td>Topic Name:</td>
              <td><input type="text" placeholder="Enter Topic Name" /></td>
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
                <td>Broker URL:</td>
                <td><input type="text" placeholder="Enter Broker URL" /></td>
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

export default AmqConfig;
