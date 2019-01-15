import React from "react";

const Card = props => {
    const {name, email} = props
  return (
    <div className="tc bg-light-green dib ma3 br3 grow shadow-5 pa3">
      <img src={`https://www.robohash.org/${name}?size=200x200`} alt="robot" />
      <h3>{name}</h3>
      <h4>{email}</h4>
    </div>
  );
};

export default Card;
