import React, { Component } from 'react';

class Loading extends Component {
    render() {
        return (
            <div>
                <div id="overlayer" />
                <div className="loader">
                    <div className="spinner-border text-primary" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Loading;