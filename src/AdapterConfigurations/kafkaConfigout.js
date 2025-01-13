import React, { useState, useContext } from 'react';
import '../Style/Configuration/AdapterConfigStyle.css';
import Adaptercontext from '../Context/Adaptercontext';

const KafkaConfigout = () => {

  const [showProperties, setShowProperties] = useState(false);

  const [kafkaconfig, setKafkaprop] = useState({
    topic: "",
    brokerurl: ""
  })
  const toggleProperties = () => {
    setShowProperties(!showProperties);
  };

  const { setkafkaAdapterpropout } = useContext(Adaptercontext)

  const { setKafkaFinalOutboundForm, KafkaFinalOutboundForm } = useContext(Adaptercontext)

  const handelchange = (event) => {
    const { name, value } = event.target
    setKafkaprop({
      ...kafkaconfig,
      [name]: value,
    });
  }


  function onSubmitHandler(e) {
    e.preventDefault()
    setKafkaFinalOutboundForm([...KafkaFinalOutboundForm, kafkaconfig]);


    setKafkaprop({
      topic: "",
      brokerurl: ""
    });
  }
  return (
    <div className="configBox">
      <div className="header" style={{ backgroundColor: 'rgb(88, 90, 148  )' }}>Kafka Configuration</div>
      <form>
        <table>
          <tbody>
            <tr>
              <td>Topic Name:</td>
              <td><input type="text" placeholder="Enter Topic Name" name="topic" value={kafkaconfig.topic} onChange={handelchange} /></td>
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
                  <td>Broker URL:</td>
                  <td><input type="text" placeholder="Enter Broker URL" name="brokerurl" value={kafkaconfig.brokerurl} onChange={handelchange} /></td>
                </tr>

              </tbody>
            </table>
            <center><button onClick={onSubmitHandler} className="submitButton" style={{ backgroundColor: '#434779' }}>Submit</button></center>
          </>
        )}

      </form>
    </div>
  );
};

export default KafkaConfigout;