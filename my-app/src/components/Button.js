import React from "react";

const Button = ({ label, id, type }) => {
  return (
    <button type={type} id={id}>
      {label}
    </button>
  );
};

export default Button;
