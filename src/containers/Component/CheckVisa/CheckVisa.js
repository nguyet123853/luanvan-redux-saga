import React, { Component, useState } from 'react';
import ReactDOM, { Comonent } from 'react-dom';
import Contry from '../data/myData.json'

import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';

const CheckVisa = props => {
    
    const [nationality, setNationality] = useState(null)
    const handleChangeNationality = (e) => {
        setNationality(e.target.value)
    }
    const [travel, setTravel] = useState(null)
    const [listResults, setListReults] = useState([])
    const handleChangeTravel = (e) => {
        setTravel(e.target.value)
    }
    const [result, setResult] = useState(null)
    const check = () => {
        const results = (Contry.world.find(item => item.id === travel) || {}).result
        const temp = results ? results.find(item => item.en === nationality) : {}
        setResult((temp || {}).text)
        openForm();
    }

    const [open, setOpen] = useState(false)
    const handleClose = (e) => {
        setOpen(false)
    }

    const openForm = () => {
        setOpen(true)
    }


    return (
        <section className id="contact-section">
            <div className="container">
                <div className="row no-gutters">
                    <div className="col-lg bg-primary">
                        <form action="#" className="p-5 contact-form">
                            <div className="intro-text">
                                <h3>Kiểm tra thị thực</h3>
                                <p>Giúp kiểm tra yêu cầu thị thực khi đi du lịch</p>
                            </div>
                            <div className="row form-group">
                                <div className="col-md-12">
                                    <label htmlFor="email">Công dân của ...</label>
                                    {/* <input type="email" id="email" className="form-control" /> */}
                                    <select
                                        onChange={handleChangeNationality}
                                    >
                                        {(Contry.world || []).map((item, index) => {
                                            return (
                                                <option key={index} value={item.name}>{item.name}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                            </div>
                            <div className="row form-group">
                                <div className="col-md-12">
                                    <label htmlFor="subject">Đi du lịch đến ...</label>
                                    {/* <input type="subject" id="subject" className="form-control" /> */}
                                    <select
                                        onChange={handleChangeTravel}
                                    >
                                        {(Contry.world || []).map((item, index) => {
                                            return (
                                                <option key={index} value={item.id}>{item.name}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                            </div>
                            <div className="row form-group">
                                <div className="col-md-12">
                                    <button type="button" className="btn btn-warning"
                                        onClick={() => check()}
                                    >Kiểm tra yêu cầu</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <Dialog open={open}
                    onClose={() => handleClose()}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Kết quả kiểm tra thị thực</DialogTitle>
                    <DialogContent>
                        <h1>{result}</h1>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => handleClose()} color="primary">
                            Cancel
                    </Button>
                        <Button onClick={() => handleClose()} color="primary">
                            Next
                    </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </section>
    );
}

export default CheckVisa;
ReactDOM.render(<CheckVisa />, document.querySelector("#root"));