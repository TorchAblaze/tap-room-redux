import React from "react";
import { v4 } from "uuid";

function NewKegForm(props) {
  function handleNewKegFromSubmission(event) {
    event.preventDefault();
    console.log(event.target.name.value);
    console.log(event.target.brand.value);
    console.log(event.target.price.value);
  }
  return (
    <React.Fragment>
      <form onSubmit={handleNewKegFromSubmission}>
        <input type="text" name="name" placeholder="Keg Name" />
        <input type="text" name="brand" placeholder="Keg Brand" />
        <input type="number" name="price" placeholder="Keg price per pint" />
        <input
          type="number"
          name="alcoholContent"
          placeholder="Alcohol Content"
        />
        <button type="submit">Add Keg</button>
      </form>
    </React.Fragment>
  );
}

export default NewKegForm;
