import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, Input, Form } from 'reactstrap';

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div>
        <Button color="none" className="btn btn-outline-info" onClick={this.toggle}>Add{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Add Data</ModalHeader>
          <ModalBody>
            <Form>
              <Label>Url Image</Label>
              <Input placeholder="Url Image..." className="mb-3"/>
              <Label>Title</Label>
              <Input placeholder="Title..." className="mb-3" />
              <Label>category</Label>
              <Input placeholder="category..." className="mb-3"/>
              <Label for="exampleText">Description</Label>
              <Input type="textarea" name="text" id="exampleText" placeholder="Description..." />
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="none" className="btn btn-outline-info" onClick={this.toggle}>Save</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;