import React, {Component} from 'react';
import {TextField} from "@mui/material";

class MyInput extends Component {
    render() {
        return (
            <div>
                <TextField disabled
                           id="outlined-required"
                           value={this.props.currentString}
                           variant="standard"
                           sx={{
                               color: 'black',
                               width: '100%',
                               border: 1,
                               marginTop: "5px",
                               "& .MuiInputBase-input.Mui-disabled": {
                                   WebkitTextFillColor: "black",
                               }
                           }}
                           InputProps={{
                               readOnly: true,
                               inputProps: {
                                   style: {
                                       fontSize: 20
                                   }
                               }
                           }}/>
            </div>
        );
    }
}

export default MyInput;