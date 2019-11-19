import React, { Component } from "react";
import { Modal, Button, Divider } from "semantic-ui-react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { closeModal, openModal } from "./modalActions";

const actions = { closeModal, openModal };

class UnauthModal extends Component {
  handleCloseModal = () => {
    if (this.props.location.pathname.includes("/event")) {
      this.props.closeModal();      
    } else {
      this.props.history.goBack();
      this.props.closeModal();
    }
  };

  render() {
    const { openModal } = this.props;
    return (
      <Modal size="mini" open={true} onClose={this.handleCloseModal}>
        <Modal.Header>현재 비로그인 상태입니다.</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <p>이 페이지를 보려면 로그인 또는 회원가입을 하십시오.</p>
            <Button.Group widths={4}>
              <Button
                fluid
                color="green"
                onClick={() => openModal("LoginModal")}
              >
                로그인
              </Button>
              <Button.Or />
              <Button fluid positive onClick={() => openModal("RegisterModal")}>
                회원가입
              </Button>
            </Button.Group>
            <Divider />
            <div style={{ textAlign: "center" }}>
              <p>손님으로 계속하려면 취소를 클릭하십시오.</p>
              <Button onClick={this.handleCloseModal}>취소</Button>
            </div>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }
}

export default withRouter(
  connect(
    null,
    actions
  )(UnauthModal)
);
