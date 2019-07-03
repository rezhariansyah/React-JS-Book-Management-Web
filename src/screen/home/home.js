import React, { Component } from 'react';
import './home.css';
import ModalExample from '../../components/modals/modalAddBook';
import axios from 'axios';
import { urlApi } from '../../support/urlAPI';
import {Link} from 'react-router-dom';

class Home extends Component {
    state = {
        listBook : []
    }

    componentDidMount() {
        this.getAllBook()
    }

    getAllBook = () => {
        axios.get(urlApi + '/library')
        .then((res) => this.setState({listBook : res.data}))
        .catch((err) => console.log(err))
    }
    
    renderBookJsx = () => {
        let jsx = this.state.listBook.map((val) => {
            return (               
                <div className="col-md-3">                       
                    <div className="card text-white bg-info" style={{width: '15rem'}}>                
                      <Link to={'/bookDetail/'+val.id}><img src={val.img} className="card-img-top cardHome" alt="..." /></Link>
                        <h5><span className="badge badge-warning">{val.category}</span></h5>                               
                        <div className="card-body">
                            <p className="card-text"><h5>{val.title}</h5></p>
                            <p className="hidden">{val.desc}</p>
                        </div>
                    </div>                                              
                </div>                
            )
        })
        return jsx
    }

    search = () => {
        let name = this.refs.input.value
        axios.get(urlApi + '/library/?title=' + name)
        .then((res) => {
            this.setState({listBook : res.data})
        })
        .catch((err) => {
            console.log(err)
        })
    }

    render() {       
        return (
            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col-sm-7 mt-5">
                        <input className="form-control form-control-lg rounded-pill search" ref="input" onChange={() => this.search} type="text" placeholder="Search..." /> 
                    </div>                                                                                                                           
                </div>
                <div class="row">
                    <div class="col-md-2 offset-md-8 mt-3">
                        <ModalExample/>
                    </div>   
                </div>
                <div className="row mt-5">
                    {this.renderBookJsx()}
                </div>
                
            </div>
        );
    }
}

export default Home;