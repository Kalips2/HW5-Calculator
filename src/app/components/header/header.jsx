import React, {Component} from 'react';
import './header.css';
import {Container, List, ListItem, TextField} from "@mui/material";
import ListResults from "../list-calculations/list-of-calculation";
import MyInput from "../input/my-textfield";

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="header">
                <Container>
                    <ListResults resultsOfCalculation={this.props.resultsOfCalculation}></ListResults>
                </Container>
                <Container className="input">
                    <MyInput currentString={this.props.currentString}></MyInput>
                </Container>
            </div>)
    }
}

export default Header;