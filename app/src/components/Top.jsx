import React, { useState } from "react";
import styled from "styled-components";
import logo from "../images/logo.png";
import { Button } from "./FoodItem";

const Top = ({ searchFood, handlefilterclick }) => {
  const [selectedButton, setSelectedButton] = useState("All"); // State to track the selected button

  const handleClick = (event) => {
    const value = event.target.value; // Get the value of the clicked button
    setSelectedButton(value); // Update the selected button state
    handlefilterclick(event); // Call the existing filter click handler
  };

  return (
    <div>
      <TopContainer>
        <img src={logo} alt="" />
        <div className="buttonsss">
          <Button
            value={"All"}
            onClick={handleClick}
            isSelected={selectedButton === "All"} // Pass isSelected prop
          >
            All
          </Button>
          <Button
            value={"Breakfast"}
            onClick={handleClick}
            isSelected={selectedButton === "Breakfast"}
          >
            Breakfast
          </Button>
          <Button
            value={"Lunch"}
            onClick={handleClick}
            isSelected={selectedButton === "Lunch"}
          >
            Lunch
          </Button>
          <Button
            value={"Dinner"}
            onClick={handleClick}
            isSelected={selectedButton === "Dinner"}
          >
            Dinner
          </Button>
        </div>
        <input onChange={searchFood} type="text" placeholder="search" />
      </TopContainer>
    </div>
  );
};

export default Top;

const TopContainer = styled.div`
  height: 140px;
  display: flex;
  justify-content: space-between;
  margin: 0;
  align-items: center;
  padding: 20px;
  background: linear-gradient(90deg, #000000, #434343, #000000);

  input {
    height: 30px;
    border-radius: 5px;
    background-color: transparent;
    border: 1px solid red;
    color: white;
    width:200px;
  }
  ::placeholder {
    color: white;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    height: 60px;
    gap: 20px;
    margin-bottom: 30px;
  }
`;
