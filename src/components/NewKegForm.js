import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";
import ResusableForm from "./ReusableForm";

function NewKegForm(props) {
  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({
      name: event.target.name.value,
      brand: event.target.brand.value,
      price: event.target.price.value,
      pintsLeft: event.target.pintsLeft.value,
      alcoholContent: event.target.alcoholContent.value,
      id: v4(),
    });
  }
  return (
    <React.Fragment>
      <ResusableForm
        formSubmissionHandler={handleNewKegFormSubmission}
        buttonText="Add Keg to Menu"
      />
    </React.Fragment>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func,
};

export default NewKegForm;
