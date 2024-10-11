import styled from "styled-components";
import Top from "./components/Top";
import Food from "./components/Food";
import "./App.css";
import { useEffect, useState } from "react";


export const BASE_URL = "http://localhost:9000";


const App = () => {
  const [data, setdata] = useState(null);
  const [fileterdata,setfilteredata]=useState(null);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(null);
  useEffect(() => {
    const fetchfooddata = async () => {
      try {
        setloading(true);
        const response = await fetch(BASE_URL);
        const json = await response.json();

        setdata(json);
        setfilteredata(json);
        setloading(false);
      } catch (error) {
        seterror("unable to fetcch data");
      }
    };
    fetchfooddata();
  }, []);
  const searchFood=(event)=>{
      const searchValue=event.target.value;
     if(searchValue==""){
      setfilteredata(data);
     }
     else{
      const filter=data?.filter((item)=>item.name.toLowerCase().includes(searchValue.toLowerCase()));
      setfilteredata(filter);
     }
  }
  const handlefilterclick=(event)=>{
    const choice=event.target.value;
    if(choice=="All" ){
      setfilteredata(data);
    }
    else{
      const filter=data?.filter((item)=>item.type.toLowerCase().includes(choice.toLowerCase()));
      setfilteredata(filter);
    }
  }
  if (error) return <div>{error}</div>;
  if (loading) return <div>loading...</div>;
  console.log(data);
  return (
    <main>
      <Top searchFood={searchFood} handlefilterclick={handlefilterclick} />
      <Food food={fileterdata}  />
    </main>
  );
};

export default App;
