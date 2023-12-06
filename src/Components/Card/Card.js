import { useState } from "react";
import "./card.css";

const Card = (props) => {

  const character = props.character;

  const [showModal, setShowModal] = useState(false);

  return (
    <div className="cardandmodal scroll-cardandmodal" >
      <div
        className="card"
        onClick={() => {
          setShowModal(true);
        }}
      >
        {/* Carte */}
        <img src={character.image} className="scroll-image" />
        {character.name}
      </div>
      
      {/* Modale */}
      {showModal ? (
        <div
          className="modaleContainer"
          onClick={() => {
            setShowModal(false);
          }}
        >
          <img src={character.image} />
        </div>
      ) : null}
    </div>
  );
};
export default Card;
