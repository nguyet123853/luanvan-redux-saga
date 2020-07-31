import React, { Component } from 'react';
//import Country from '../data/myData.json'
var country = require('../data/myData.json');

class index extends Component {
    state = {
        countrylist = country
    }
    render() {
        const {countrylist} = this.state;
        return (
            <div className="visacheck">
                
            </div>
        );
    }
}

export default index;