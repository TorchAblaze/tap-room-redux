import kegMenuReducer from "../../reducers/keg-menu-reducer";

describe("kegMenuReducer", () => {
  let action;
  const kegData = {
    name: "Rebel IPA",
    brand: "Samuel Adams",
    price: 16.0,
    pintsLeft: 124,
    alcoholContent: 6.5,
    id: 1,
  };

  test("Should return default state if there is no action type passed into the reducer", () => {
    expect(kegMenuReducer({}, { type: null })).toEqual({});
  });

  test("Should successfully add new keg data to fullKegMenu", () => {
    const { name, brand, price, pintsLeft, alcoholContent, id } = kegData;
    action = {
      type: "ADD_KEG",
      name: name,
      brand: brand,
      price: price,
      pintsLeft: pintsLeft,
      alcoholContent: alcoholContent,
      id: id,
    };

    expect(kegMenuReducer({}, action)).toEqual({
      [id]: {
        name: name,
        brand: brand,
        price: price,
        pintsLeft: pintsLeft,
        alcoholContent: alcoholContent,
        id: id,
      },
    });
  });
});
