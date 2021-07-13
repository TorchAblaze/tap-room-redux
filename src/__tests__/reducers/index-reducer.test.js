import rootReducer from "../../reducers/index";
import { createStore } from "redux";
import formVisibleReducer from "../../reducers/form-visible-reducer";
import kegMenuReducer from "../../reducers/keg-menu-reducer";

let store = createStore(rootReducer);

describe("rootReducer", () => {
  test("Should return default state if no action type is recognized", () => {
    expect(rootReducer({}, { type: null })).toEqual({
      fullKegMenu: {},
      formVisibleOnPage: false,
    });
  });

  test("Check that initial state of kegMenuReducer matches root reducer", () => {
    expect(store.getState().fullKegMenu).toEqual(
      kegMenuReducer(undefined, { type: null })
    );
  });

  test("Check that inital state of formVisibleReducer matches root reducer", () => {
    expect(store.getState().formVisibleOnPage).toEqual(
      formVisibleReducer(undefined, { type: null })
    );
  });

  test("Check that ADD_KEG action works for kegMenuListReducer and root reducer", () => {
    const action = {
      type: "ADD_KEG",
      name: "Rebel IPA",
      brand: "Samuel Adams",
      price: 16.0,
      pintsLeft: 124,
      alcoholContent: 6.5,
      id: 1,
    };
    store.dispatch(action);
    expect(store.getState().fullKegMenu).toEqual(
      kegMenuReducer(undefined, action)
    );
  });
  test("Check that TOGGLE_FORM action works for formVisible Reducer and root reducer", () => {
    const action = {
      type: "TOGGLE_FORM",
    };
    store.dispatch(action);
    expect(store.getState().formVisibleOnPage).toEqual(
      formVisibleReducer(undefined, action)
    );
  });
});
