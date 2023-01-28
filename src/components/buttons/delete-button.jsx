import React, {Component} from 'react';
import {Button} from "@mui/material";

class DeleteButton extends Component {
    constructor(props) {
        super(props);
        this.deleteCharacter = this.deleteCharacter.bind(this);
    }

    deleteCharacter = (events) => {
        events.preventDefault();
        this.props.deleteCharacter();
    }

    render() {
        return (
            <Button sx={{
                margin: '10px',
                width: 150
            }}
                    variant="contained"
                    onClick={this.deleteCharacter}>
                {this.props.name}
            </Button>
        )
    }
}
export default DeleteButton;