import React from "react";
import PropTypes from "prop-types";

function ResusableForm(props) {
  return (
    <React.Fragment>
      <hr />
      <form onSubmit={props.formSubmissionHandler}>
        <input type="text" name="name" placeholder="Keg Name" required />
        <input type="text" name="brand" placeholder="Keg Brand" required />
        <input
          type="number"
          name="price"
          placeholder="Keg price per pint"
          min="0.00"
          step="0.01"
          required
        />
        <input
          type="number"
          name="pintsLeft"
          placeholder="Pint amount in stock"
          min="0"
          required
        />
        <input
          type="number"
          name="alcoholContent"
          placeholder="Alcohol by volume"
          min="0.00"
          step="0.01"
          required
        />
        <br />
        <button type="submit">{props.buttonText}</button>
      </form>
      <hr />
    </React.Fragment>
  );
}

ResusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
};

export default ResusableForm;
