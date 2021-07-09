import React from "react";
import NewKegForm from "./NewKegForm";
import KegMenu from "./KegMenu";
import KegDetail from "./KegDetail";
import EditKegForm from "./EditKegForm";

class KegControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      fullKegMenu: [],
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
    const newFullKegMenu = this.state.fullKegMenu.concat(newKeg);
    this.setState({ fullKegMenu: newFullKegMenu, formVisibleOnPage: false });
  };

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.fullKegMenu.filter(
      (keg) => keg.id === id
    )[0];
    this.setState({ selectedKeg: selectedKeg });
  };

  handleEditClick = () => {
    this.setState({ editing: true });
  };

  handleEditingKegInMenu = (kegToEdit) => {
    const editedFullKegMenu = this.state.fullKegMenu
      .filter((keg) => keg.id !== this.state.selectedKeg.id)
      .concat(kegToEdit);
    this.setState({
      fullKegMenu: editedFullKegMenu,
      editing: false,
      selectedKeg: null,
    });
  };

  handleDeletingKeg = (id) => {
    const newFullKegMenu = this.state.fullKegMenu.filter(
      (keg) => keg.id !== id
    );
    this.setState({
      fullKegMenu: newFullKegMenu,
      selectedKeg: null,
    });
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
          kegMenu={this.state.fullKegMenu}
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

export default KegControl;
