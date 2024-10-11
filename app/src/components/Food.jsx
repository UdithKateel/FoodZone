import React from 'react'
import styled from 'styled-components'
import bg from "../images/bg.png"
import FoodItem from './FoodItem'
const Food = ({food}) => {
  return (
    
    <Foodcart>
        {food?.map((item)=>(
            <FoodItem key={item.name} name={item.name} image={item.image} text={item.text} price={item.price}></FoodItem>
        ))}
    </Foodcart>

    
  )
}

export default Food
const Foodcart=styled.div`
  
background-image:url(${bg});
background-size:cover;
min-height:68.5vh;
 background-repeat: repeat;
border:none;
margin:none;
padding:none;
display:flex;
flex-wrap:wrap;
justify-content:center;
gap:30px;
padding-top:40px;
`