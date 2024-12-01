// import React, { useState } from 'react';

// function DragImageExample() {
//   const [isDragging, setIsDragging] = useState(false);
//   const [position, setPosition] = useState({ x: 0, y: 0 });

//   const handleMouseDown = (e) => {
//     setIsDragging(true);
//     setPosition({ x: e.clientX, y: e.clientY }); // Initial position
//   };

//   const handleMouseMove = (e) => {
//     if (isDragging) {
//       setPosition({ x: e.clientX, y: e.clientY }); // Update position
//     }
//   };

//   const handleMouseUp = () => {
//     setIsDragging(false);
//   };

//   return (
//     <div
//       onMouseMove={handleMouseMove}
//       onMouseUp={handleMouseUp}
//       style={{
//         height: '100vh',
//         width: '100vw',
//         background: '#f0f0f0',
//         position: 'relative',
//       }}
//     >
//       {/* Button to start dragging */}
//       <button
//         onMouseDown={handleMouseDown}
//         style={{
//           padding: '10px 20px',
//           fontSize: '16px',
//           position: 'absolute',
//           top: '20px',
//           left: '20px',
//         }}
//       >
//         Drag Me
//       </button>

//       {/* Image to display while dragging */}
//       {isDragging && (
//         <img
//           src="/logo192.png" // Replace with your image URL
//           alt="Dragged"
//           style={{
//             position: 'absolute',
//             top: position.y,
//             left: position.x,
//             width: '150px',
//             height: '50px',
//             pointerEvents: 'none', // Prevent image from blocking mouse events
//             transform: 'translate(-50%, -50%)', // Center the image at the cursor
//           }}
//         />
//       )}
//     </div>
//   );
// }

// export default DragImageExample;
