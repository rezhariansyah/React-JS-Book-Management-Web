import React, { Component } from 'react';
import './bookDetail.css';
import ModalEdit from '../../components/modals/modalEdit';
import swal from 'sweetalert';
import Axios from 'axios';
import { urlApi } from '../../support/urlAPI';
import {Link} from 'react-router-dom';


class BookDetail extends Component {
    state = {
        book : {}
    }

    componentDidMount() {
        this.getAllBook()
        this.getDataApi()
    }

    getAllBook = () => {
        Axios.get(urlApi + '/library')
        .then((res) => this.setState({book : res.data}))
        .catch((err) => console.log(err))
    }
    
    getDataApi = () => {
        var idUrl = this.props.match.params.id
        Axios.get(urlApi + '/library/' + idUrl)
        .then((res) => {
            this.setState({book : res.data})
        })
        .catch((err) => {
            console.log(err)
        })
    }

    onBtnDelete = () => {
        Axios.delete(urlApi + '/library/' + this.state.book.id)
        .then((res) => {
            swal({
                title: "the Book Has Been Deleted",
                text: "You clicked the button!",
                icon: "success",
                button: "Aww yiss!",
            });
            this.getAllBook()
        })
        
    }

    render() {
        let {title,desc,img,create_at,category} = this.state.book
        return (
            <div className="container">
                <div className="jumbotron">
                    <div className="row">
                        <ModalEdit/>
                        <Link to='/'><input type="button" className="btn btn-outline-light btn-sm ml-3" value="Delete" onClick={this.onBtnDelete}/></Link>
                    </div>
                    <div className="card cardBook" style={{maxWidth: '15rem'}}>
                        <img src={img} style={{height:"299px"}} className="card-img-top" alt="..." />
                    </div>                  
                </div>
                <div className="row">
                    <div className="col-sm-8">
                        <h4>{title}</h4>
                        <p>Genre : {category}</p>
                        <p>{create_at}</p>
                        <p>{desc}</p>
                    </div>  
                </div>                 
            </div>        
        );
    }
}


export default BookDetail;