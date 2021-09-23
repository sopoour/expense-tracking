import React from "react";

import ChartBar from "./ChartBar";

import styled from "styled-components";

const ChartContainer = styled.div`
  padding: 1rem;
  border-radius: 12px;
  background-color: #f8dfff;
  text-align: center;
  display: flex;
  justify-content: space-around;
  height: 10rem;
`;

const Chart = (props) => {
  //get an own array of just the values for each month
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  //based on that new array we can calculate the maxValue to be passed on as props to ChartBar
  //use spread operator (...) in order to pull out all the array elements from dataPointValues to be inserted in the List created by Math.max
  const totalMaximum = Math.max(...dataPointValues);
  return (
    <ChartContainer>
      {/* Create a ChartBar for each dataPoint (12 in total since 12 months*/}
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </ChartContainer>
  );
};

export default Chart;
