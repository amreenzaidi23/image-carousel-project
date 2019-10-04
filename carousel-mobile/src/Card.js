import React from "react";
import PropTypes from "prop-types";

// This is for view the card in details
//Get state from App and show in card
const Card = ({ property, indx }) => {
  //Get property and asign value
  const { id, largeImageURL, likes, user } = property;

  return (
    <div id={`card-${id}`} className="card">
      <span>
        {indx + 1}
        <img src={largeImageURL} alt={id} />

        <div className="details">
          <span className="index">Likes:{likes}</span>
          <p>
            User: {user}
            <br />
          </p>
        </div>
      </span>
    </div>
  );
};

Card.propTypes = {
  property: PropTypes.object.isRequired,
  indx: PropTypes.number.isRequired
};

export default Card;
