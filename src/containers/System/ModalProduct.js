import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "./UserManage.scss";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { emitter } from "../../utils/emitter";

class ModalProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
        name: "",
        image: "",
        userID: "",
        url: "",
      });
    });
  }

  componentDidMount() {
    console.log("ComponentDidMount");
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
        console.log("Check copy state: ", this.state);
      }
    );
  };

  checkValideInput = () => {
    let isValid = true;
    let arrInput = ["name", "userID"];
    for (let i = 0; i < arrInput.length; i++) {
      if (!this.state[arrInput[i]]) {
        isValid = false;
        alert("Vui lòng nhập " + arrInput[i]);
        break;
      }
    }
    return isValid;
  };

  handleAddNewStore = async () => {
    let isValid = this.checkValideInput();
    if (isValid === true) {
      this.props.createNewStore(this.state);
    }
  };

  render() {
    return (
      <Modal
        isOpen={this.props.isStoreOpen}
        toggle={this.toggle}
        className={"modal-user-container"}
        size="lg"
        centered
      >
        <ModalHeader>Thêm quán cà phê mới</ModalHeader>
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
            <label>Id chủ quán</label>
            <input
              type="text"
              onChange={(event) => {
                this.handleOnchangeInput(event, "userID");
              }}
              value={this.state.userID}
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
          {/* <div className="inpurt-container">
            <label>Phân quyền</label>
            <select name="roleId" class="form-control">
              <option value={this.state.roleId}>Admin</option>
              <option value={this.state.roleId}>Guest</option>
              <option value={this.state.roleId}>Host</option>
            </select>
          </div> */}
        </ModalBody>
        <ModalFooter>
          <Button
            className="btn btn-add-done"
            color="primary"
            onClick={() => {
              this.handleAddNewStore();
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalProduct);
