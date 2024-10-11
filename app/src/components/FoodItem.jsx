import React from "react";
import { BASE_URL } from "../App";
import styled from "styled-components";
const FoodItem = (props) => {
  return (
    <Item>
      <div className="food_image">
        <img src={BASE_URL + props.image} alt="" />
      </div>
      
      <div  className="food_info"><h3>{props.name}</h3>
            <p>{props.text}</p>
      </div>
      <div className="btn"><Button>₹{(props.price*30).toFixed(2)}</Button></div>
       
    </Item>
  );
};

export default FoodItem;
const Item = styled.div`
color:white;
  width: 340px;
  height: 167px;
  border: 0.66px solid;

  border-image-source: radial-gradient(
      80.69% 208.78% at 108.28% 112.58%,
      #eabfff 0%,
      rgba(135, 38, 183, 0) 100%
    ),
    radial-gradient(
      80.38% 222.5% at -13.75% -12.36%,
      #98f9ff 0%,
      rgba(255, 255, 255, 0) 100%
    );

  background: url(.png),
    radial-gradient(
      90.16% 143.01% at 15.32% 21.04%,
      rgba(165, 239, 255, 0.2) 0%,
      rgba(110, 191, 244, 0.0447917) 77.08%,
      rgba(70, 144, 213, 0) 100%
    );
  background-blend-mode: overlay, normal;
  backdrop-filter: blur(13.1842px);

  border-radius: 20px;

  display: flex;
  padding: 8px;
align-item:center;
justify-content:center;
.btn{
display:flex;
align-items:end;
justify-content:center;
}

  .food_info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    h3 {
      margin-top: 8px;
      font-size: 18px;
      font-weight: 500;
    }
    p {
      margin-top: 4px;
      font-size: 13px;
    }
    button {
      font-size: 12px;
    }
  }
`;
export const Button = styled.button`
  background: ${({ isSelected }) => (isSelected ? "linear-gradient(to bottom, #B22222, #8B0000);" : "#ff4343")};
  outline: 1px solid ${({ isSelected }) => (isSelected ? "white" : "#ff4343")};
  height:50px;
  border-radius: 10px;
  padding: 6px 12px;
  border: none;
  color: white;
  cursor: pointer;
   font-weight: 800 !important;

  &:hover {
    background-color: #f22f2f;
  }
`;