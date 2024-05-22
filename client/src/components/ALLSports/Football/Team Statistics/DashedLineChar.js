import * as React from 'react';
import {
  LineChart,
  lineElementClasses,
  markElementClasses,
} from '@mui/x-charts/LineChart';

const DashedLineChart = ({ teamDetails }) => {
  const homeTeamGoals = teamDetails[0]?.goals.for.total || [];
  const awayTeamGoals = teamDetails[1]?.goals.for.total || [];
  const xLabels = ['Game 1', 'Game 2', 'Game 3', 'Game 4', 'Game 5']; // Modify as needed

  return (
    <LineChart
      width={500}
      height={300}
      series={[
        { data: homeTeamGoals, label: teamDetails[0]?.team.name, id: 'homeTeam' },
        { data: awayTeamGoals, label: teamDetails[1]?.team.name, id: 'awayTeam' },
      ]}
      xAxis={[{ scaleType: 'point', data: xLabels }]}
      sx={{
        [`.${lineElementClasses.root}, .${markElementClasses.root}`]: {
          strokeWidth: 1,
        },
        '.MuiLineElement-series-homeTeam': {
          strokeDasharray: '5 5',
        },
        '.MuiLineElement-series-awayTeam': {
          strokeDasharray: '3 4 5 2',
        },
        [`.${markElementClasses.root}:not(.${markElementClasses.highlighted})`]: {
          fill: '#fff',
        },
        [`& .${markElementClasses.highlighted}`]: {
          stroke: 'none',
        },
      }}
    />
  );
}

export default DashedLineChart;
