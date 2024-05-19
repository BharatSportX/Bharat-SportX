import React from 'react';
import { Resizable } from 're-resizable';

const ResizableBox = ({ children }) => {
  return (
    <Resizable
      style={{ border: '1px solid #ddd', padding: '10px' }}
      defaultSize={{
        width: '100%',
        height: 400,
      }}
    >
      {children}
    </Resizable>
  );
};

export default ResizableBox;
