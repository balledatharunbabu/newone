import React, { useState } from 'react';
import '../Style/Configuration/AdapterConfigStyle.css';

const RestConfig = () => {
  const [showProperties, setShowProperties] = useState(false);

  const toggleProperties = () => {
    setShowProperties(!showProperties);
  };

  return (
    <div className="configBox">
      <div className="header">Rest Configuration</div>
      <form>
        <table>
          <tbody>
            <tr>
              <td>URL:</td>
              <td><input type="text" placeholder="Enter URL" /></td>
            </tr>
          </tbody>
        </table>
        <div className="toggleButton" onClick={toggleProperties}>
          Properties
        </div>
        {showProperties && (
            <>
          <table>
            <tbody>
              {/* <tr>
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
              </tr> */}
            </tbody>
          </table>
          <center><button type="submit" className="submitButton">Submit</button></center>
          </>
        )}
        <div>
          <button type="submit" className="submitButton">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default RestConfig;
