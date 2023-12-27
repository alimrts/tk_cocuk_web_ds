import React from "react";
import FlippableCard from "./flippable-card";
import { FilterTabs } from "./constants";
import styled from "styled-components";
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

  grid-gap: 1vh;
  padding-bottom: 8vh;
  max-width: 1600px;
  flex-wrap: wrap;
  padding-right: 1vh;
  padding-left: 0;
  margin-left: -2vh;

  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(8, 1fr);
    grid-auto-rows: 1fr;
    grid-gap: 1vh;
  }
  @media only screen and (max-width: 1750px) {
    grid-template-columns: repeat(7, 1fr);
    grid-auto-rows: auto;
    grid-gap: 1vh;
  }
  @media only screen and (max-width: 1600px) {
    grid-template-columns: repeat(6, 1fr);
    grid-auto-rows: auto;
    grid-gap: 1vh;
  }
  @media only screen and (max-width: 1400px) {
    grid-template-columns: repeat(5, 1fr);
    grid-auto-rows: auto;
    grid-gap: 1vh;
  }

  @media only screen and (max-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: auto;
    grid-gap: 1vh;
  }

  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    transform: scale(0.85);
  }
`;
const CardsGrid = () => {
  return (
    <Grid>
      {FilterTabs.map((tab) => (
        <FlippableCard
          key={tab.nameFront}
          nameFront={tab.nameFront}
          nameBack={tab.nameBack}
          icon={tab.icon}
        />
      ))}
    </Grid>
  );
};

export default CardsGrid;
