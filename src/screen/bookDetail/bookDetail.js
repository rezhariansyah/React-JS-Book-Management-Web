import React, { Component } from 'react';
import './bookDetail.css';
import ModalEdit from '../../components/modals/modalEdit';
import swal from 'sweetalert';
import Axios from 'axios';
import { urlApi } from '../../support/urlAPI';


class BookDetail extends Component {
    state = {
        book : {}
    }

    componentDidMount() {
        this.getDataApi()
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
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              swal("Poof! Your imaginary file has been deleted!", {
                icon: "success",
              });
            } else {
              swal("Your imaginary file is safe!");
            }
          })
    }

    render() {
        let {title,desc,img,create_at,update_at,category} = this.state.book
        return (
            <div className="container">
                <div className="jumbotron">
                    <div className="row">
                        <ModalEdit/>
                        <input type="button" className="btn btn-outline-light btn-sm ml-3" value="Delete" onClick={() => this.onBtnDelete()}/>
                    </div>
                    <div className="card cardBook" style={{maxWidth: '15rem'}}>
                        <img src={img} style={{height:"299px"}} className="card-img-top" alt="..." />
                    </div>                  
                </div>
                <div className="row">
                    <div className="col-sm-8">
                        <h4>{title}</h4>
                        <p>Genre : {category}</p>
                        <p>{desc}</p>
                    </div>  
                </div> 
                
            </div>
            
        );
    }
}


export default BookDetail;