import React from "react";
import { withRouter } from "react-router";
// import Navigation from "../Navigation";

const ActionLayout = (props) => {
  const onClickHandler = () => {
    props.history.goBack();
  };

  return (
    <div>
      <header>
        <button onClick={onClickHandler}>Back</button>
        {/* <NavLink to="/posts">Back</NavLink> */}
      </header>
      <main>{props.children}</main>
    </div>
  );
};

export default withRouter(ActionLayout);
