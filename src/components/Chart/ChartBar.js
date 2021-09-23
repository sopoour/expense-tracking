import React from "react";

import styled from "styled-components";

const ChartBarContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ChartBarInner = styled.div`
  height: 100%;
  width: 100%;
  border: 1px solid #313131;
  border-radius: 12px;
  background-color: #c3b4f3;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const ChartBarFilled = styled.div`
  background-color: #4826b9;
  width: 100%;
  transition: all 0.3s ease-out;
  height: ${props => props.fillHeight};
`;

const ChartBarLabel = styled.div`
  font-weight: bold;
  font-size: 0.5rem;
  text-align: center;
`;

const ChartBar = (props) => {
  let barFillHight = "0%";
  if (props.maxValue > 0) {
    barFillHight = Math.round((props.value / props.maxValue) * 100) + "%";
  }
  return (
    <ChartBarContainer>
      <ChartBarInner>
        <ChartBarFilled fillHeight={barFillHight}></ChartBarFilled>
      </ChartBarInner>
      <ChartBarLabel>{props.label}</ChartBarLabel>
    </ChartBarContainer>
  );
};

export default ChartBar;
