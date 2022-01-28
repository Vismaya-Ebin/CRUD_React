 

 import React from 'react';
 import Error from "../assets/notfound.jpg";

 
 export default function Notfound() {
  const style = {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    flexWrap: "wrap",
  };
  const imageStyle = {
    objectFit: "fill",
    width: "100%",
  };
   return <div style={style}>
       <img style={imageStyle} src={Error} alt="" />
   </div>;
 }
 