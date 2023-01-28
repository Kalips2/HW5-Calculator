import React, {Component} from 'react';
import {Container} from "@mui/material";
import DigitalButton from "../digital-button/digital-button";
import './app-body.css'
import SignButton from "../sign-button/sign-button";
import DeleteButton from "../buttons/delete-button";
import EqualButton from "../buttons/equal-button";

class Body extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container className="body">
                <div  className="digitalSide">
                    <DigitalButton number={1} addDigitalToString={this.props.addDigitalToString}></DigitalButton>
                    <DigitalButton number={2} addDigitalToString={this.props.addDigitalToString}></DigitalButton>
                    <DigitalButton number={3} addDigitalToString={this.props.addDigitalToString}></DigitalButton>
                    <DigitalButton number={4} addDigitalToString={this.props.addDigitalToString}></DigitalButton>
                    <DigitalButton number={5} addDigitalToString={this.props.addDigitalToString}></DigitalButton>
                    <DigitalButton number={6} addDigitalToString={this.props.addDigitalToString}></DigitalButton>
                    <DigitalButton number={7} addDigitalToString={this.props.addDigitalToString}></DigitalButton>
                    <DigitalButton number={8} addDigitalToString={this.props.addDigitalToString}></DigitalButton>
                    <DigitalButton number={9} addDigitalToString={this.props.addDigitalToString}></DigitalButton>
                    <DigitalButton number={0} addDigitalToString={this.props.addDigitalToString}></DigitalButton>
                </div>
                <div className="signSide">
                    <SignButton sign={"+"} addSignToString={this.props.addSignToString}> </SignButton>
                    <SignButton sign={"-"} addSignToString={this.props.addSignToString}> </SignButton>
                    <SignButton sign={"/"} addSignToString={this.props.addSignToString}> </SignButton>
                    <SignButton sign={"*"} addSignToString={this.props.addSignToString}> </SignButton>
                    <DeleteButton string={"Delete"} deleteCharacter={this.props.deleteCharacter}> </DeleteButton>
                    <EqualButton string={"="} evaluateExpression={this.props.evaluateExpression}> </EqualButton>
                </div>

            </Container>
        )
    }
}

export default Body;