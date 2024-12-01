import { Button } from "@mui/material";
import '../Style/Configuration/Configuration.css'
import Flow from '../Components/Flow'
import { useState } from "react";
function Menu(){

    const [isDragging, setIsDragging] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
  
    const handleMouseDown = (e) => {
        setIsDragging(true);
        setPosition({ x: e.clientX, y: e.clientY }); // Initial position
      };
    
      const handleMouseMove = (e) => {
        if (isDragging) {
          setPosition({ x: e.clientX, y: e.clientY }); // Update position
        }
      };
    
      const handleMouseUp = () => {
        setIsDragging(false);
      };


    return(
<div className="drawBoard" style={{display:'flex'}}
  onMouseMove={handleMouseMove}
  onMouseUp={handleMouseUp}
>

<div className="Menu" >
    <div style={{ background: 'black', color: 'white', height: '50px', display: 'flex', alignItems: 'center' }}>
        <span style={{ marginLeft: '50px' }}>ADAPTERS</span>
    </div>

             <div className="Adapter" style={{background:'#dbd8d8'}}
           


             >
            <Button sx={{padding:'25px',color:'black',marginTop:'30px'}}
                  
            onMouseDown={handleMouseDown}
                    
         >Kafka</Button>
      {isDragging && (
            <img
              src="/kafka.png" // Replace with your image path in the public folder
              alt="Dragged"
              style={{
                position: 'absolute',
                top: position.y,
                left: position.x,
                width: '70px',
                height: '50px',
                pointerEvents: 'none', // Prevent interference with mouse events
                transform: 'translate(-50%, -50%)', // Center the image at the cursor
              }}
            />
          )}
        </div>
       
</div>

   <div>
   
   <div className="inbound">


</div>
   </div>
</div>

  
    )
}

export default Menu;