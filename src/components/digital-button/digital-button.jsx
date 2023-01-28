import React, {Component} from 'react';
import {Button} from "@mui/material";
import './digital-button.css'

class DigitalButton extends Component {
    constructor(props) {
        super(props);
        this.addDigital = this.addDigital.bind(this);
    }

    addDigital = (events) => {
        events.preventDefault();
        this.props.addDigitalToString(this.props.number);
    }

    render() {
        return (
            <Button sx={{
                margin: '10px'
            }}
                    variant="contained"
                    onClick={this.addDigital}>
                {this.props.number}
            </Button>
        )
    }
}

export default DigitalButton;