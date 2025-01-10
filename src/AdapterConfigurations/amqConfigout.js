import React, { useState ,useContext} from 'react';
import '../Style/Configuration/AdapterConfigStyle.css';
import AppBarComponent  from '../MenuBar/AppBarComponent';
import { useEffect } from 'react';
import IbmMqConfig from './ibmMqConfig'
import Adaptercontext from '../Context/Adaptercontext';


const AmqConfigout = () => {
  const [showProperties, setShowProperties] = useState(false);

  const[amqconfig,setAmqConfigprop]=useState({
    topic:"",
    queue:"",
    brokerurl:"",
    username:"",
    password:""

  });

  const{setamqAdapterpropout}=useContext(Adaptercontext)

  const {setAmqFinalOutboundForm,AmqFinalOutboundForm}=useContext(Adaptercontext)

  // const{setflownodes}=useContext(Adaptercontext)

  // const INNodes = flownodes.filter((flownodes) =>
  //   ['Amq', 'ibmMQ', 'rest', 'kafka'].includes(flownodes.type)
  //   );
  //   console.log(INNodes)
  //   const OutNodes = flownodes.filter((flownodes) =>
  //       ['restout', 'kafkaout', 'ibmMQout', 'Amqout'].includes(flownodes.type)
  //       );
  //       console.log(OutNodes)


  const handleChange=(event)=>{
    const{name,value}=event.target;

    setAmqConfigprop ({
      ...amqconfig,
      [name]: value,
  });

  }


  const toggleProperties = () => {
    setShowProperties(!showProperties);
  };
  const [array, setarray] = useState(false);
function onSubmitHandler(e){
e.preventDefault()


setAmqFinalOutboundForm([...AmqFinalOutboundForm, amqconfig]);


setAmqConfigprop({
  topic: "",
  queue: "",
  brokerurl: "",
  username: "",
  password: "",
});
  setarray(true)


}

  return (
    <>
   
    <div className="configBox" style={{overflowY: 'auto',overflowX: 'hidden', scrollbarWidth: 'thin', maxHeight: '30vh'}}>
      <div className="header" style={{backgroundColor:'rgb(88, 90, 148  )'}}>JMS Configuration</div>
      <form >
        <table>
          <tbody>
            <tr>
              <td>Topic Name:</td>
              <td><input type="text" placeholder="Enter Topic Name" name='topic' value={amqconfig.topic} onChange={handleChange} /></td>
            </tr>
            <tr>
              <td>Queue Name:</td>
              <td><input type="text" placeholder="Enter Queue Name" name='queue' value={amqconfig.queue} onChange={handleChange}  /></td>
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
                <td><input type="text" placeholder="Enter Broker URL"  name='brokerurl' value={amqconfig.brokerurl} onChange={handleChange}  /></td>
              </tr>
              <tr>
                <td>Username:</td>
                <td><input type="text" placeholder="Enter Username"  name='username' value={amqconfig.username} onChange={handleChange} /></td>
              </tr>
              <tr>
                <td>Password:</td>
                <td><input type="password" placeholder="Enter Password" name='password' value={amqconfig.password} onChange={handleChange} /></td>
              </tr>
            </tbody>
          </table>
           
          
          <center><button  onClick={onSubmitHandler} className="submitButton" style={{backgroundColor:'#434779'}} >Save</button></center>
          </>
        )}
        
      </form>
  
    </div>
    {/* {array&&
    
      (<IbmMqConfig  amqconfig={amqconfig}></IbmMqConfig>)
  
  } */}
    </>
  );
  
};

export default AmqConfigout;

