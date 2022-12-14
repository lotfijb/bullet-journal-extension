import React from "react";
const Header = ({ search }) => {
  return (
    <div className="header-container">
      <input
        type="text"
        className="form-control"
        placeholder="Search note here .."
        aria-label="Search note here .."
        onChange={(event) => {
          search(event.target.value);
        }}
      />
    </div>
  );
};

export default Header;
