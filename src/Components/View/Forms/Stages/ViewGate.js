// import '../Style/Configuration/Stage.css'
// import '../../../AdapterConfigStyle.css';

import * as React from 'react';

function ViewGate(){

    return(
        <>
         <div className="configBox" style={{overflowY: 'auto',overflowX: 'hidden', scrollbarWidth: 'thin', maxHeight: '30vh'}}>
      <div className="header" style={{backgroundColor:'rgb(88, 90, 148  )'}}>JMS Configuration</div>
      <form style={{marginTop:'10px',zIndex:"1000px"}}>
        <table>
          <tbody>
            <tr>
              <td>Encryption:</td>
              <td >
      <input type='text' name='Symmetric' value='Symmetric(AES)' style={{width:'200px'}} readOnly/>
   
</td>
         
            </tr>
            <tr>
              <td>Hash:</td>
              <td >
      <input type='text' name='CipherText_SHA256' value='CipherText_SHA256' style={{width:'200px'}} readOnly/>
   
</td>
         
            </tr>
          </tbody>
        </table>
        {/* <center><button  onClick={onSubmitHandler} className="submitButton" style={{backgroundColor:'#434779'}} >Save</button></center> */}
        
      </form>
      </div>
        </>
    )
}

export default ViewGate;