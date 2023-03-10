import React, { useRef } from 'react';
import { useDrag } from 'react-dnd';
import { COMPONENT } from '../constants/constants';

const DisplayContent = ({ data, components, path }) => {
  const ref = useRef(null);

  const [{ isDragging }, drag] = useDrag({
    item: { id: data.id, path },
    type: COMPONENT,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0 : 1;
  drag(ref);

  const component = components[data.id];

  return (
    <div ref={ref} className="component draggable" style={{ opacity }}>
      <div>{data.id}</div>
      <div>{JSON.stringify(component)}</div>
    </div>
  );
};
export default DisplayContent;
