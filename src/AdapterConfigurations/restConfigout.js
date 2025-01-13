import React, { useState,useEffect, useContext } from 'react';
import '../Style/Configuration/AdapterConfigStyle.css';
import Adaptercontext from '../Context/Adaptercontext';
const RestConfigout = () => {
  const [showProperties, setShowProperties] = useState(false);
  const[restconfig,setrestprop]=useState({
    url:""
  })
  const toggleProperties = () => {
    setShowProperties(!showProperties);
  };

  const handelchange=(event)=>{
      const{name,value}=event.target
    setrestprop(
      {
        ...restconfig,
        [name]: value
      }
    )
  }
  const{setrestAdapterpropout}=useContext(Adaptercontext)
  const {setRestFinalOutboundForm,RestFinalOutboundForm}=useContext(Adaptercontext)

  function onSubmitHandler(e){
    e.preventDefault()
    setRestFinalOutboundForm([...RestFinalOutboundForm, restconfig]);

    
    setrestprop({
    url:""
  });
   
  }

 

  return (
    <div className="configBox">
      <div className="header" style={{backgroundColor:'rgb(88, 90, 148  )'}}>Rest Configuration</div>
      <form>
        <table>
          <tbody>
            <tr>
              <td>URL:</td>
              <td><input type="text" placeholder="Enter URL" name='url' value={restconfig.url} onChange={handelchange}/></td>
            </tr>
          </tbody>
        </table>
        <center><button onClick={onSubmitHandler} className="submitButton" style={{backgroundColor:'#434779'}}>Submit</button></center>
        {/* <div className="toggleButton" onClick={toggleProperties}>
          Properties
        </div> */}
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
          
          </>
        )}
      
      </form>
    </div>
  );
};

export default RestConfigout;