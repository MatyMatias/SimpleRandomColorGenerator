import React, { Component } from 'react';
import './Box.css';

class Box extends Component {

    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
        }
        this.handleClick = this.handleClick.bind(this);
        this.viewColorCode = this.viewColorCode.bind(this);
    }

    handleClick(e) {
        this.viewColorCode();
    }

    viewColorCode() {
        let newState = { ...this.state, clicked: !this.state.clicked }
        this.setState(newState);
    }

    render() {
        return (
            <div className="Box" style={{ background: this.props.value }} onClick={this.handleClick}>
                {this.state.clicked && <h3>{this.props.value}</h3>}
            </div >
        )
    }
}

export default Box;