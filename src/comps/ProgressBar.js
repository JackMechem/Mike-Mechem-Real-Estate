import React from "react"
import styled from "styled-components"
import Colors from "../styles/colors"

const ProgressBarWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 5px;
  z-index: 3;
  background-color: transparent;
`

const ProgressBarBar = styled.div`
  position: fixed;
  width: 100%;
  height: 5px;
  z-index: 3;
  background-color: ${Colors.primary}; // or any other color: ;
  width: ${props => props.progress}%;
`

const ProgressBar = ({ progress }) => (
  <ProgressBarWrapper>
    <ProgressBarBar progress={progress} />
  </ProgressBarWrapper>
)

export default ProgressBar;