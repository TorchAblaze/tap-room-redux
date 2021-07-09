import React from "react";
import PropTypes from "prop-types";

function KegDetail(props) {
  const { keg, onClickingSellPint, onClickingDelete } = props;

  return (
    <React.Fragment>
      <hr />
      <h1>Keg Details</h1>
      <h3>
        {keg.brand}: {keg.name}
      </h3>
      <p>Price per pint: ${keg.price}</p>
      <p>Alcohol content: {keg.alcoholContent}% ABV</p>
      <p>Pints remaining: {keg.pintsLeft}</p>
      <button onClick={() => onClickingSellPint(keg.id)}>Sell a pint</button>
      <button onClick={props.onClickingEdit}>Update Keg Details</button>
      <button onClick={() => onClickingDelete(keg.id)}>
        Remove Keg from Menu
      </button>
      <hr />
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingSellPint: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingDelete: PropTypes.func,
};

export default KegDetail;
