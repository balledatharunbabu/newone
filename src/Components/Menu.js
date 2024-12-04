import { Button } from "@mui/material";
import '../Style/Configuration/Configuration.css'
import Flow from '../Components/Flow'
import { useState } from "react";
import { useDnD } from "./DnDContext";
function Menu(){
  const [_, setType] = useDnD();
 
  const onDragStart = (event, nodeType) => {
    setType(nodeType);
    console.log(nodeType)
    event.dataTransfer.effectAllowed = 'move';
  };
  const [showOptions, setShowOptions] = useState(false);
const handleButtonClick = () => setShowOptions(!showOptions);
    return(

    
<div className="Menu">
<div style={{ background: 'black', color: 'white', height: '40px', display: 'flex', alignItems: 'center',width:'' }}>
<span style={{ marginLeft: '50px' }}>ADAPTERS</span>
</div>
<div className="Adapter" style={{ background: '#dbd8d8' }}>
<Button sx={{ padding: '5px', color: 'black', marginTop: '5px' }} onDragStart={(event) => onDragStart(event, 'Amq')} draggable>ActiveMq</Button>
<Button sx={{ padding: '5px', color: 'black', marginTop: '5px' }} onDragStart={(event) => onDragStart(event, 'ibmMQ')} draggable>IBMMQ</Button>
<Button sx={{ padding: '5px', color: 'black', marginTop: '5px' }} onDragStart={(event) => onDragStart(event, 'kafka')} draggable>Kafka</Button>
<Button sx={{ padding: '5px', color: 'black', marginTop: '5px' }} onDragStart={(event) => onDragStart(event, 'rest')} draggable>REST</Button>
</div>

<div style={{ background: 'black', color: 'white', height: '40px', display: 'flex', alignItems: 'center', marginTop: '30px' }}>
<span style={{ marginLeft: '50px', cursor: 'pointer' }} onClick={handleButtonClick}>
STAGES
</span>
</div>

<div className="Options" style={{ background: '#dbd8d8', marginTop: '5px' }}>
<Button sx={{ padding: '5px', color: 'black', marginTop: '5px' }} onDragStart={(event) => onDragStart(event, 'source')} draggable >
Source
</Button>
<Button sx={{ padding: '5px', color: 'black', marginTop: '5px' }}  onDragStart={(event) => onDragStart(event, 'modify')} draggable >
Modify
</Button>
<Button sx={{ padding: '5px', color: 'black', marginTop: '5px' }}  onDragStart={(event) => onDragStart(event, 'selector')} draggable >
Selector
</Button>
<Button sx={{ padding: '5px', color: 'black', marginTop: '5px' }} onDragStart={(event) => onDragStart(event, 'target')} draggable  >
Target
</Button>
</div>

      </div>

  
    );
}

export default Menu;