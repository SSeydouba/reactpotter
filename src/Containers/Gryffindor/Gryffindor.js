import React from "react";
import gryf from "../../assets/gryf.png";
import Card from "../../Components/Card/Card";
import "./gryffindor.css"

const Gryffindor = () => {
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
    }
  ];

  return (
    <div>
      <img width="200px" src={gryf} alt="Gryffindor Logo" />
      RECHERCHE
      <input type="text" />
      <section className="cardsContainer">
        {apiAnswer.map((item) => (
          <Card  character = {item} />
        ))}
      </section>
    </div>
  );
};

export default Gryffindor;
