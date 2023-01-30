import React, { useRef } from 'react';
import { useDrag } from 'react-dnd';
import DropZone from './DropZone';
import DisplayContent from './DisplayContent';
import Resizable from './Resizable';
import { COLUMN } from '../constants/constants';

const style = {};
const Column = ({ data, components, handleDrop, path }) => {
  const ref = useRef(null);

  const [{ isDragging }, drag] = useDrag({
    item: {
      id: data.id,
      children: data.children,
      path,
    },
    type: COLUMN,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0 : 1;
  drag(ref);

  const renderComponent = (component, currentPath) => {
    return (
      <DisplayContent
        key={component.id}
        data={component}
        components={components}
        path={currentPath}
      />
    );
  };

  return (
    <div ref={ref} style={{ ...style, opacity }}>
      <Resizable>
        <p>
          columnId:- <span style={{ color: 'green' }}>{data.id}</span>
        </p>
        {data.children.map((component, index) => {
          const currentPath = `${path}-${index}`;

          return (
            <React.Fragment key={component.id}>
              {/* <DropZone
                data={{
                  path: currentPath,
                  childrenCount: data.children.length,
                }}
                onDrop={handleDrop}
              /> */}

              <button onClick={() => alert(component.id)}>
                {renderComponent(component, currentPath)}
              </button>
            </React.Fragment>
          );
        })}
        <DropZone
          data={{
            path: `${path}-${data.children.length}`,
            childrenCount: data.children.length,
          }}
          onDrop={handleDrop}
          isLast
        />
      </Resizable>
    </div>
  );
};
export default Column;
