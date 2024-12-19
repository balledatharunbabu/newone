import { Button } from '@mui/material';
import '../Style/Configuration/Configuration.css'

function Headerbar() {
  return (
    <div className="Header" style={{ display: 'flex', gap:'70vh' }}>
 <div style={{marginTop:'3vh'}}>
 <Button style={{color:'#bb330d',background:'rgb(28, 25, 25)'}}>Configuration</Button>
 </div>
<div style={{marginTop:'3vh',marginLeft:'50vh',textAlign:'center',gap: '20vh',display:'flex'}}>
<Button sx={{borderRadius:'20px',color:'black',background:'#ff3e04',height:'36px',width:'173px'}}>Integeration</Button>
<Button sx={{borderRadius:'20px',color:'white',height:'36px',width:'100px'}}>View</Button>
       
<Button sx={{borderRadius:'20px',color:'white',height:'36px',width:'100px'}}>Filter</Button>
    </div>
    </div>
  );
}

export default Headerbar;