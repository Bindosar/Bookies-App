import React from "react";

const MaktabaItem = ({ maktaba }) => {
  return <img src={maktaba.image} alt={maktaba.name} />;
};

export default MaktabaItem;
