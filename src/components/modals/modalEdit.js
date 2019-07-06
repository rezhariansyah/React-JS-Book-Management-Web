import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, Input, Form } from 'reactstrap';
import Axios from 'axios';
import { urlApi } from '../../support/urlAPI';

class ModalEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      editBookData : {
        title : "",
        img : "",
        category : "",
        desc : "",
        create_at : new Date().getFullYear() + "/" + (new Date().getMonth() + 1) + "/" + new Date().getDate()
      }
    };

    this.toggle = this.toggle.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      title : nextProps.title,
      img : nextProps.img,
      category : nextProps.category,
      desc : nextProps.desc,
      create_at : new Date().getFullYear() + "/" + (new Date().getMonth() + 1) + "/" + new Date().getDate()
    })
  }

  updateBook = () => {
    let { title, img, category, desc, create_at } = this.state.editBookData
    Axios.patch(urlApi + '/library/' + this.state.editBookData.id, {
      title, img, category, desc, create_at
    })
    .then((res) => {
      this.setState(this.state.editBookData)
      this.toggle()
    })
  }

  editBook = (id, title, img, category, desc, create_at) => {
    this.setState({
      editBookData : (id, title, img, category, desc, create_at)
    })
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div>
        <Button color="none" className="btn btn-outline-info btn-sm" onClick={this.toggle}>Edit{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Edit Book</ModalHeader>
          <ModalBody>
            <Form>
              <Label>Url Image</Label>
              <Input placeholder={this.state.img} className="mb-3" onChange={(e) => {
                let {editBookData} = this.state;
                editBookData.img = e.target.value;
                this.setState({editBookData})
              }} />
              <Label>Title</Label>
              <Input placeholder={this.state.title} className="mb-3" onChange={(e) => {
                let {editBookData} = this.state;
                editBookData.title = e.target.value;
                this.setState({editBookData})
              }} />
              <Label>category</Label>
              <Input placeholder={this.state.category} className="mb-3" onChange={(e) => {
                let {editBookData} = this.state;
                editBookData.category = e.target.value;
                this.setState({editBookData})
              }} />
              <Label for="exampleText">Description</Label>
              <Input type="textarea" name="text" id="exampleText" placeholder={this.state.desc} onChange={(e) => {
                let {editBookData} = this.state;
                editBookData.desc = e.target.value;
                this.setState({editBookData})
              }} />
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="none" className="btn btn-outline-info btn-sm" onClick={this.updateBook.bind(this)}>Save</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalEdit;