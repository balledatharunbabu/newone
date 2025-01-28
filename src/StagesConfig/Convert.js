import { useContext } from 'react';
import '../Style/Configuration/AdapterConfigStyle.css';
import * as React from 'react';
import Adaptercontext from '../Context/Adaptercontext';


export default function ConvertData() {

const{setTransData}=useContext(Adaptercontext)

const handleChange = (event) => {
    setTransData(event.target.value); // Update state on selection
};


    return (
        <>
            <div className="configBox" style={{ overflowY: 'auto', overflowX: 'hidden', scrollbarWidth: 'thin', maxHeight: '30vh' }}>
                <div className="header" style={{ backgroundColor: 'rgb(88, 90, 148  )' }}>JMS Configuration</div>
                <form style={{ marginTop: '10px', zIndex: "1000px" }}>
                    <table>
                        <tbody>
                            <tr>
                                <td>Encryption:</td>
                                <td >
                                    <input type='text' name='Symmetric' value='Symmetric(AES)' style={{ width: '200px' }} readOnly />

                                </td>
                            </tr>
                            <tr>
                                <td>Hash:</td>
                                <td >
                                    <input type='text' name='CipherText_SHA25dsds6' value='CipherText_SHA256' style={{ width: '200px' }} readOnly />
                                </td>
                            </tr>

                            <tr>
                                <td>DataConvert:</td>
                                <td >
                                    <select style={{ width: '100px' }}
                                    onChange={handleChange}
                                    >
                                        <option value='null' >None</option> 
                                        <option value='Json-Xml'>Json-to-Xml</option>
                                        <option value='Xml-Json'>Xml-to-Json</option>

                                        <option value='Csv-Xml'>Csv-to-Xml</option>
                                        <option value='Csv-Json'>Csv-to-Json</option>

                                        <option value='Json-Csv'>Json-to-Csv</option>
                                        <option value='Xml-Csv'>Xml-to-Csv</option>
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