export default (state = {}, action) => {
  const { name, brand, price, pintsLeft, alcoholContent, id } = action;
  switch (action.type) {
    case "ADD_KEG":
      return Object.assign({}, state, {
        [id]: {
          name: name,
          brand: brand,
          price: price,
          pintsLeft: pintsLeft,
          alcoholContent: alcoholContent,
          id: id,
        },
      });
    default:
      return state;
  }
};
