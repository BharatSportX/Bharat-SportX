import { useState } from 'react';

const useDemoConfig = ({ series, interactionMode, dataType, show }) => {
  const [data, setData] = useState(generateData(series, dataType));
  
  const randomizeData = () => {
    setData(generateData(series, dataType));
  };

  return {
    data,
    interactionMode,
    randomizeData,
  };
};

const generateData = (series, dataType) => {
  const data = [];
  for (let i = 0; i < series; i++) {
    const seriesData = {
      label: `Series ${i + 1}`,
      data: Array.from({ length: 10 }, (_, idx) => ({
        primary: `Item ${idx + 1}`,
        secondary: Math.floor(Math.random() * 100),
      })),
    };
    data.push(seriesData);
  }
  return data;
};

export default useDemoConfig;
