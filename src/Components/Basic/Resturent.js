import React, { useState } from 'react';
import "./style.css";
import Menu from './MenuApi';
import MenuCard from "./MenuCard";


const Resturent = () => {
    const [menuData,setMenuData]=useState(Menu);
  return (
    <>
   <MenuCard menuData={menuData}/>


    </>
  )
}

export default Resturent;
