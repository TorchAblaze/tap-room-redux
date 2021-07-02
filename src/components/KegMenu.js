import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";

function KegMenu(props) {
  return (
    <React.Fragment>
      <hr />
      {props.kegMenu.map((keg) => (
        <Keg
          whenKegClicked={props.onKegSelection}
          name={keg.name}
          brand={keg.brand}
          price={keg.price}
          pintsLeft={keg.pintsLeft}
          alcoholContent={keg.alcoholContent}
          id={keg.id}
          key={keg.id}
        />
      ))}
    </React.Fragment>
  );
}

KegMenu.propTypes = {
  kegMenu: PropTypes.array,
  onKegSelection: PropTypes.func,
};

export default KegMenu;
