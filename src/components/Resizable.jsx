import React, { useState } from 'react';

function Resizable({ children }) {
  const [size, setSize] = useState({ x: 400, y: 200 });

  const handler = (mouseDownEvent) => {
    const startSize = size;
    const startPosition = { x: mouseDownEvent.pageX, y: mouseDownEvent.pageY };

    function onMouseMove(mouseMoveEvent) {
      setSize((currentSize) => ({
        x: startSize.x - startPosition.x + mouseMoveEvent.pageX,
        y: startSize.y - startPosition.y + mouseMoveEvent.pageY,
      }));
    }
    function onMouseUp() {
      document.body.removeEventListener('mousemove', onMouseMove);
      document.body.removeEventListener('mouseup', onMouseUp);
    }

    document.body.addEventListener('mousemove', onMouseMove);
    document.body.addEventListener('mouseup', onMouseUp, { once: true });
  };

  return (
    <div
      className="base draggable column"
      style={{ width: size.x, height: size.y }}
      onMouseDown={handler}
    >
      {children}
    </div>
  );
}
export default Resizable;
