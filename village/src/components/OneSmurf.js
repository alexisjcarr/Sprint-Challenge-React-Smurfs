import React from "react";

const OneSmurf = props => {
  const smurf = props.smurfs.find(
    smurf => `${smurf.id}` === props.match.params.id
  );

  if (!smurf) {
    return <h1>Loading Smurf... Please wait...</h1>
  }

  return (
    <div className="Smurf">
      <h3>{smurf.name}</h3>
      <strong>{smurf.height} tall</strong>
      <p>{smurf.age} smurf years old</p>
    </div>
  );
};

export default OneSmurf;
