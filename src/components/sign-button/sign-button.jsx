import React, {Component} from 'react';
import {Button} from "@mui/material";

class SignButton extends Component {
    constructor(props) {
        super(props);
        this.addSign = this.addSign.bind(this);
    }

    addSign = (events) => {
        events.preventDefault();
        this.props.addSignToString(this.props.sign);
    }

    render() {
        return (
            <Button sx={{
                margin: '10px'
            }}
                    variant="contained"
                    onClick={this.addSign}>{this.props.sign}
            </Button>
        )
    }
}

export default SignButton;