import React, { Component } from 'react';
import './home.css';

class home extends Component {
    render() {
        return (
            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col-sm-7 mt-5">
                        <input className="form-control form-control-lg rounded-pill search" type="text" placeholder="Search..." /> 
                    </div>                                                                                                                           
                </div>
                <div class="row">
                    <div class="col-md-2 offset-md-8 mt-3">
                        <input className="btn btn-info" type="button" defaultValue="Input" />
                    </div>   
                </div>
                <div className="row mt-5">
                    <div className="col-md-3">                       
                            <div className="card text-white bg-info" style={{width: '15rem'}}>                
                                <img src="https://placeimg.com/400/500/people/sepia" className="card-img-top" alt="..." />                                
                                <div className="card-body">
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>                                              
                    </div>
                    <div className="col-md-3">
                        <div className="card text-white bg-info" style={{width: '15rem'}}>
                            <img src="https://placeimg.com/400/500/people/sepia" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card text-white bg-info" style={{width: '15rem'}}>
                            <img src="https://placeimg.com/400/500/people/sepia" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card text-white bg-info" style={{width: '15rem'}}>
                            <img src="https://placeimg.com/400/500/people/sepia" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default home;