import React from "react";

const ButtonFetchUsers = props => {
  return (
    <button
      style={{
        padding: "10px 20px",
        border: "2px solid white",
        backgroundColor: "orange",
        margin: 20,
        fontWeight: "bold"
      }}
      onClick={props.click}
    >
      Dodaj użytkownika
    </button>
  );
};

export default ButtonFetchUsers;
