import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "./UserManage.scss";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { emitter } from "../../utils/emitter";
import { every } from "lodash";

class ModalProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      image: "",
      userID: "",
      url: "",
      previewImg: "",
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

  // handleOnchangeInput = (event, id) => {
  //   let copyState = { ...this.state };
  //   copyState[id] = event.target.value;
  //   this.setState(
  //     {
  //       ...copyState,
  //     },
  //     () => {
  //       console.log("Check copy state: ", this.state);
  //     }
  //   );
  // };

  //Lấy biến name
  handleOnchangeName = (event) => {
    this.setState({
      name: event.target.value,
    });
    console.log(event.target.value);
  };

  //Lấy biến userID
  handleOnchangeIDUser = (event) => {
    this.setState({
      userID: event.target.value,
    });
    console.log(event.target.value);
  };

  //Lấy biến url
  handleOnchangeURL = (event) => {
    this.setState({
      url: event.target.value,
    });
    console.log(event.target.value);
  };

  // Lấy biến image
  handleOnchangeImage = (event) => {
    let data = event.target.files;
    let file = data[0];
    if (file) {
      let imageURL = URL.createObjectURL(file);
      this.setState({
        image: imageURL,
      });
    }
    console.log("Image data: ", this.state.previewImg);
  };

  //Kiểm tra thông tin đã nhập đầy đủ chưa
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

  //Thêm quán cà phê mới
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
                this.handleOnchangeName(event);
              }}
              value={this.state.name}
            />
          </div>
          <div className="inpurt-container">
            <label>Id chủ quán</label>
            <input
              type="text"
              onChange={(event) => {
                this.handleOnchangeIDUser(event);
              }}
              value={this.state.userID}
            />
          </div>
          <div className="inpurt-container">
            <label>Ảnh</label>
            <input
              id="image-upload"
              type="file"
              onChange={this.handleOnchangeImage}
            />
            <label>Đường dẫn ảnh</label>
            <input type="text" value={this.state.image} readOnly />
            <div className="image-preview">
              <img src={this.state.image} alt="Store-image"></img>
            </div>
          </div>
          <div className="inpurt-container">
            <label>URL</label>
            <input
              type="text"
              onChange={(event) => {
                this.handleOnchangeURL(event);
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
