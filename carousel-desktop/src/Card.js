import React from "react";
import PropTypes from "prop-types";
//This component is use to show in detail page
const Card = ({ property, indx }) => {
  const { id, largeImageURL, likes, user } = property;
  console.log(largeImageURL);
  return (
    <div id={`card-${indx}`} className="card">
      <span className="index">{indx + 1}</span>
      <img src={largeImageURL} alt={user} />
      <div className="details">
        <span className="index">Likes:{likes}</span>
        <p className="user">
          User: {user}
          <br />
        </p>
      </div>
    </div>
  );
};
Card.propTypes = {
  property: PropTypes.object.isRequired,
  indx: PropTypes.number.isRequired
};

export default Card;
