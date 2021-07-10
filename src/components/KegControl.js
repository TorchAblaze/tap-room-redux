import React from "react";
import NewKegForm from "./NewKegForm";
import KegMenu from "./KegMenu";
import KegDetail from "./KegDetail";
import EditKegForm from "./EditKegForm";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class KegControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      selectedKeg: null,
      editing: false,
    };
  }

  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null,
        editing: false,
      });
    } else {
      this.setState((prevState) => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  };

  handleAddingNewKegToMenu = (newKeg) => {
    const { dispatch } = this.props;
    const { id, name, brand, price, pintsLeft, alcholContent } = newKeg;
    const action = {
      type: "ADD_KEG",
      id: id,
      name: name,
      brand: brand,
      price: price,
      pintsLeft: pintsLeft,
      alcholContent: alcholContent,
    };
    dispatch(action);
    this.setState({ formVisibleOnPage: false });
  };

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.props.fullKegMenu[id];
    this.setState({ selectedKeg: selectedKeg });
  };

  handleEditClick = () => {
    this.setState({ editing: true });
  };

  handleEditingKegInMenu = (kegToEdit) => {
    const { dispatch } = this.props;
    const { id, name, brand, price, pintsLeft, alcholContent } = kegToEdit;
    const action = {
      type: "ADD_KEG",
      id: id,
      name: name,
      brand: brand,
      price: price,
      pintsLeft: pintsLeft,
      alcholContent: alcholContent,
    };
    dispatch(action);
    this.setState({
      editing: false,
      selectedKeg: null,
    });
  };

  handleDeletingKeg = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: "DELETE_KEG",
      id: id,
    };
    dispatch(action);
    this.setState({ selectedKeg: null });
  };

  handleSellPint = (id) => {
    const selectedKeg = this.state.fullKegMenu.filter(
      (keg) => keg.id === id
    )[0];
    if (selectedKeg.pintsLeft > 1) {
      selectedKeg.pintsLeft -= 1;
    } else {
      selectedKeg.pintsLeft = "Out of Stock";
    }
    this.setState({ selectedKeg: selectedKeg });
  };

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing) {
      currentlyVisibleState = (
        <EditKegForm
          keg={this.state.selectedKeg}
          onEditKeg={this.handleEditingKegInMenu}
        />
      );
      buttonText = "Return to Keg Menu";
    } else if (this.state.selectedKeg != null) {
      currentlyVisibleState = (
        <KegDetail
          keg={this.state.selectedKeg}
          onClickingSellPint={this.handleSellPint}
          onClickingEdit={this.handleEditClick}
          onClickingDelete={this.handleDeletingKeg}
        />
      );
      buttonText = "Return to Keg Menu";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = (
        <NewKegForm onNewKegCreation={this.handleAddingNewKegToMenu} />
      );
      buttonText = "Return to Keg Menu";
    } else {
      currentlyVisibleState = (
        <KegMenu
          kegMenu={this.props.fullKegMenu}
          onKegSelection={this.handleChangingSelectedKeg}
        />
      );
      buttonText = "Add Keg";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

KegControl.propTypes = {
  fullKegMenu: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    fullKegMenu: state,
  };
};

KegControl = connect(mapStateToProps)(KegControl);

export default KegControl;
