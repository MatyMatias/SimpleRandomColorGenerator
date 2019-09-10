import React, { Component } from 'react';
import Box from './Box';
import './Colorboxes.css';

class Colorboxes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numberOfBoxes: 0,
            box: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.randon = this.random.bind(this);
        this.checkArray = this.checkArray.bind(this);
    }

    random(howMany) {
        let letters = '0123456789ABCDEF';
        let colorArray = [];
        let colorToPush = '';
        for (let index = 0; index < howMany; index++) {
            colorToPush = '#';
            for (let i = 0; i < 6; i++) {
                colorToPush += letters[Math.floor(Math.random() * 16)];
            }
            colorArray.push(colorToPush)
        }
        return colorArray;
    }

    checkArray(numberOfBoxs) {
        if (this.state.box.length !== numberOfBoxs) {
            let newObjectState = {
                numberOfBoxes: numberOfBoxs,
                box: this.random(numberOfBoxs)
            }
            this.setState(newObjectState);
        } else {

        }
    }

    handleChange(e) {
        this.checkArray(e.target.value);
    }


    render() {
        return (
            <div className="Colorboxes">
                <p>How many boxes</p>
                <input type="text" value={this.state.numberOfBoxes} onChange={this.handleChange}></input>
                <div className="Colorboxes-boxes">
                    {this.state.box.map(p => <Box value={p} />)}
                </div>
            </div>
        );
    }
}

export default Colorboxes;