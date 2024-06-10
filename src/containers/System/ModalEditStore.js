import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "./ProductManage.scss";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { emitter } from "../../utils/emitter";
import _ from "lodash";

class ModalEditStore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      image: "",
      userID: "",
      url: "",
    };

    this.listenToEmitter();
  }

  listenToEmitter() {
    emitter.on("EVENT_CLEAR_MODAL_DATA", () => {
      this.setState({
        id: "",
        name: "",
        image: "",
        userID: "",
        url: "",
      });
    });
  }

  componentDidMount() {
    let store = this.props.currentStore;
    if (store && !_.isEmpty(store)) {
      this.setState({
        id: store.id,
        name: store.name,
        image: store.image,
        userID: store.userID,
        url: store.url,
      });
    }
    console.log("Didmount edit modal", this.props.currentStore);
  }

  toggle = () => {
    this.props.toggleFromStore();
  };

  handleOnchangeInput = (event, id) => {
    let copyState = { ...this.state };
    copyState[id] = event.target.value;
    this.setState(
      {
        ...copyState,
      },
      () => {
        console.log("Check copy store state: ", this.state);
      }
    );
  };

  checkValideInput = () => {
    let isValid = true;
    let arrInput = ["name"];
    for (let i = 0; i < arrInput.length; i++) {
      if (!this.state[arrInput[i]]) {
        isValid = false;
        alert("Vui lòng nhập " + arrInput[i]);
        break;
      }
    }
    return isValid;
  };

  handleEditStore = () => {
    let isValid = this.checkValideInput();
    if (isValid === true) {
      this.props.editStore(this.state);
    }
  };

  render() {
    console.log("Check props from parent", this.props);
    return (
      <Modal
        isOpen={this.props.isStoreOpen}
        toggle={this.toggle}
        className={"modal-store-container"}
        size="lg"
        centered
      >
        <ModalHeader>Sửa thông tin quán cà phê</ModalHeader>
        <ModalBody>
          <div className="inpurt-container">
            <label>Tên quán</label>
            <input
              type="text"
              onChange={(event) => {
                this.handleOnchangeInput(event, "name");
              }}
              value={this.state.name}
            />
          </div>
          <div className="inpurt-container">
            <label>Image</label>
            <input
              type="text"
              onChange={(event) => {
                this.handleOnchangeInput(event, "image");
              }}
              value={this.state.image}
            />
          </div>

          <div className="inpurt-container">
            <label>URL</label>
            <input
              type="text"
              onChange={(event) => {
                this.handleOnchangeInput(event, "url");
              }}
              value={this.state.url}
            />
          </div>

          <div className="inpurt-container">
            <label>ID Chủ quán</label>
            <input
              type="text"
              onChange={(event) => {
                this.handleOnchangeInput(event, "userID");
              }}
              value={this.state.userID}
              disabled
            />
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            className="btn btn-edit-done"
            color="primary"
            onClick={() => {
              this.handleEditStore();
            }}
          >
            Xong
          </Button>{" "}
          <Button
            className="btn btn-cancel"
            color="secondary"
            onClick={this.toggle}
          >
            Huỷ
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditStore);