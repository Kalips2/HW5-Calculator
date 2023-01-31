import React, {Component} from 'react';
import {Button} from "@mui/material";

class EqualButton extends Component {
    constructor(props) {
        super(props);
        this.evaluateExpression = this.evaluateExpression.bind(this);
    }

    evaluateExpression = (events) => {
        events.preventDefault();
        this.props.evaluateExpression();
    }

    render() {
        return (
            <Button sx={{
                margin: '10px',
                width: 150,
            }}
                    variant="contained"
                    onClick={this.evaluateExpression}>
                {this.props.string}
            </Button>
        )
    }
}
export default EqualButton;