import React from "react";
import ithem1 from "../../images/Blue_Cristal_890.jpg";  
import ithem2 from "../../images/Dolphins_990.jpg";
import ithem3 from "../../images/Hurrem_1160.jpg";
import ithem4 from "../../images/Soul_of_Nature_990.jpeg";
import ithem5 from "../../images/Vintage_Tulip_1090.jpg";
import ithem6 from "../../images/tender_720.jpg";
import GoodsCard from "./GoodsCard"; 


function GoodsList(){
    const goods = [
        {image: ithem1, name: "Синій кристал", price: 890}, 
        {image: ithem2, name: "Дельфіни", price: 990}, 
        {image: ithem3, name: "Гюррем Султан", price: 1160}, 
        {image: ithem4, name: "Душа природи", price: 990}, 
        {image: ithem5, name: "Вінтажний тюльпан", price: 1090}, 
        {image: ithem6, name: "Ніжність", price: 720}
    ];
    return (
    <div className="goods-list">
      {goods.map((item, index) => (
        <GoodsCard
          key={index}
          image={item.image}
          name={item.name}
          price={item.price}
        />
      ))}
    </div>
  );
}

export default GoodsList;
