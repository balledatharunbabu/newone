import React, { useState, useContext } from 'react';
import '../Style/Configuration/AdapterConfigStyle.css';
import AppBarComponent from '../MenuBar/AppBarComponent';
import Adaptercontext from '../Context/Adaptercontext';

const IbmMqConfig = () => {
  const [showProperties, setShowProperties] = useState(false);
  const [ibmconfig, setibmconfigprop] = useState({
    queuemanger: "",
    queuename: "",
    channel: "",
    connectionName: "",
    username: "",
    password: ""
  })

  const { setibmAdapterprop } = useContext(Adaptercontext)
  const handleChange = (event) => {
    const { name, value } = event.target;

    setibmconfigprop({
      ...ibmconfig,
      [name]: value,
    });
  }
  const toggleProperties = () => {
    setShowProperties(!showProperties);
  };
  const [array, setarray] = useState(false);
  function onSubmitHandler(e) {
    e.preventDefault()
    setarray(true)

    setibmAdapterprop(ibmconfig)
  }
  return (
    <>
      <div className="configBox">
        <div className="header" style={{ backgroundColor: 'rgb(88, 90, 148  )' }}>IbmMQ Configuration</div>
        <form>
          <table>
            <tbody>
              <tr>
                <td>Queue Manager:</td>
                <td><input type="text" placeholder="Enter Queue Manager Name" name='queuemanger' value={ibmconfig.queuemanger} onChange={handleChange} /></td>
              </tr>
              <tr>
                <td>Queue Name:</td>
                <td><input type="text" placeholder="Enter Queue Name" name='queuename' value={ibmconfig.queuename} onChange={handleChange} /></td>
              </tr>
            </tbody>
          </table>
          <div className="toggleButton" onClick={toggleProperties} style={{ backgroundColor: 'rgb(88, 90, 148  )' }}>
            Properties
          </div>
          {showProperties && (
            <>
              <table>
                <tbody>
                  <tr>
                    <td>Channel</td>
                    <td><input type="text" placeholder="Enter Channel" name='channel' value={ibmconfig.channel} onChange={handleChange} /></td>
                  </tr>
                  <tr>
                    <td>Connection Name</td>
                    <td><input type="text" placeholder="Connection Name" name='connectionName' value={ibmconfig.connectionName} onChange={handleChange} /></td>
                  </tr>
                  <tr>
                    <td>Username:</td>
                    <td><input type="text" placeholder="Enter Username" name='username' value={ibmconfig.username} onChange={handleChange} /></td>
                  </tr>
                  <tr>
                    <td>Password:</td>
                    <td><input type="password" placeholder="Enter Password" name='password' value={ibmconfig.password} onChange={handleChange} /></td>
                  </tr>
                </tbody>
              </table>
              <center><button onClick={onSubmitHandler} className="submitButton" style={{ backgroundColor: '#434779' }}>Submit</button></center>
            </>
          )}

        </form>
      </div>
      {/* {array&&
    
    (<AppBarComponent ibmconfig={ibmconfig} amqconfig={Amqconfig}></AppBarComponent>)

} */}
    </>
  );
};

export default IbmMqConfig;
