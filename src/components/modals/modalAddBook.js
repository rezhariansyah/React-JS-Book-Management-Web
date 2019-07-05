import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, Input, Form } from 'reactstrap';
import Axios from 'axios';
import { urlApi } from '../../support/urlAPI';

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      newBookData : {
        title : "",
        img : "",
        category : "",
        desc : "",
        create_at : new Date().getFullYear() + "/" + (new Date().getMonth() + 1) + "/" + new Date().getDate()
      }
    };

    this.toggle = this.toggle.bind(this);
  }

  
  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  addBook = () => {
    Axios.post(urlApi + '/library' , this.state.newBookData)
    .then((res) => {
      let { books } = this.state;
      this.toggle()
      this.setState({books})         
    })
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
              <Input placeholder="Url Image..." value={this.state.newBookData.img} onChange={(e) => {
                let {newBookData} = this.state;

                newBookData.img = e.target.value;

                this.setState({newBookData})
              }} className="mb-3"/>
              <Label>Title</Label>
              <Input placeholder="Title..." value={this.state.newBookData.title} onChange={(e) => {
                let {newBookData} = this.state;

                newBookData.title = e.target.value;

                this.setState({newBookData})
              }} className="mb-3" />
              <Label>category</Label>
              <Input placeholder="category..." ref="inputCategory" value={this.state.newBookData.category} onChange={(e) => {
                let {newBookData} = this.state;

                newBookData.category = e.target.value;

                this.setState({newBookData})
              }} className="mb-3"/>
              <Label for="exampleText">Description</Label>
              <Input type="textarea" ref="inputDescription" value={this.state.newBookData.desc} onChange={(e) => {
                let {newBookData} = this.state;

                newBookData.desc = e.target.value;

                this.setState({newBookData})
              }} placeholder="Description..." />
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="none" className="btn btn-outline-info" onClick={this.addBook.bind(this)}>Save</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;