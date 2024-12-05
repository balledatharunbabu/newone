import React from 'react';

const Sidebar = () => {
const onDragStart = (event, nodeType) => {
event.dataTransfer.setData('application/reactflow', nodeType);
event.dataTransfer.effectAllowed = 'move';
};

return (
<aside style={{ padding: '10px', width: '200px', backgroundColor: '#f4f4f4' }}>
<div
onDragStart={(event) => onDragStart(event, 'default')}
draggable
style={{
marginBottom: '10px',
padding: '10px',
backgroundColor: '#ddd',
cursor: 'grab',
}}
>
Default Node
</div>
</aside>
);
};

export default Sidebar;