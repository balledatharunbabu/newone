import '../Style/Configuration/Stage.css'
import * as React from 'react';

function Ingate(){

    return(
        <>
         <div className="Ingate" style={{overflowY: 'auto',overflowX: 'hidden', scrollbarWidth: 'thin', maxHeight: '30vh'}}>
      <div className="header" style={{backgroundColor:'rgb(88, 90, 148  )'}}>JMS Configuration</div>
      <form style={{marginTop:'10px',zIndex:"1000px"}}>
        <table>
          <tbody>
            <tr>
              <td>Queue Name:</td>
              <td>
  <select class="custom-dropdown">
    <option value="base64">base64</option>
    <option value="hex">hex</option>
    <option value="binary">binary</option>
  </select>
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

export default Ingate