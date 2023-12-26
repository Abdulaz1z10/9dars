import React, { useState } from 'react'
import img1 from "../assets/pngegg.png";
import img2 from "../assets/chevrolet_cobalt_34120.webp";
import img3 from "../assets/chevrolet_monza_1138642.jpg";

export default function Cars() {
    const [cars] = useState([
    {
        img: img1,
        id: 1,
        name: "Gentra",
        price: "$18000",
        year: 2023,
        color: "black",
    },
    {
        img: img2,
        id: 2,
        name: "Cobalt",
        price: "$14000",
        year: 2022,
        color: "white",
    },
    {
        img: img3,
        id: 3,
        name: "Monza",
        price: "$20000",
        year: 2023,
        color: "black",
    },
    ]);
    const url = window.location.href.split("/")
    let index = Number(url[4])
return (
    <div>
    <div className="container">
        <h1 className="text-center bg-danger">Cars</h1>
        <div className="box">
          <div>
            <img src={cars[index].img} alt="img" />
            <h1>
              Name: <span>{cars[index].name}</span>
            </h1>
            <h1>
              Price: <span>{cars[index].price}</span>
            </h1>
            <h1>
              Year: <span>{cars[index].year}</span>
            </h1>
            <h1>
              Color: <span>{cars[index].color}</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
