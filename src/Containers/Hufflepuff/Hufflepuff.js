import React from "react";
import Card from "../../Components/Card/Card";
//import "./hufflepuff.css"

const Hufflepuff = () => {
  const apiAnswer = [
    {
      name: "Harry Potter",
      image: "https://ik.imagekit.io/hpapi/harry.jpg",
    },
    {
      name: "Hermione Granger",
      image: "https://ik.imagekit.io/hpapi/hermione.jpeg",
    },
    {
      name: "Ron Weasley",
      image: "https://ik.imagekit.io/hpapi/ron.jpg",
    },
    {
      name: "Minerva McGonagall",
      image: "https://ik.imagekit.io/hpapi/mcgonagall.jpg",
    },
  ];

  return (
      <section className="cardsContainers">
        {apiAnswer.map((item) => (
          <Card name={item.name} urlImage={item.image} />
        ))}
      </section>
    
  );
};

export default Hufflepuff;
