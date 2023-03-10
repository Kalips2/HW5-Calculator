import React, {Component} from "react";
import '../styles/App.css';
import Header from "../components/header/header";
import Body from "../components/body/app-body";
import Parser from "../parser/Parser";
import {Button} from "@mui/material";
import {applyMiddleware, bindActionCreators, createStore} from "redux";
import examplesActions from "../actions/examples";
import {connect, Provider} from "react-redux";
import examplesReducer from '../reducers/examples'
import thunkMiddleware from 'redux-thunk';

//for create store (normal) need to install react-redux
const store = createStore(
    examplesReducer,
    applyMiddleware(thunkMiddleware)
);

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            parser: new Parser(),
            firstNumber: "",
            secondNumber: "",
            operator: "",
            resultsOfCalculation: [],
            examples: []
        }
        this.addDigitalToString = this.addDigitalToString.bind(this);
        this.addSignToString = this.addSignToString.bind(this);
        this.evaluateExpression = this.evaluateExpression.bind(this);
        this.deleteCharacterInExpression = this.deleteCharacterInExpression.bind(this);
    }

    signs = "+-/*";
    addDigitalToString = (number) => {
        if (this.state.operator === "") {
            this.setState({
                firstNumber: this.state.firstNumber + number.toString(),
            })
        } else {
            this.setState({
                secondNumber: this.state.secondNumber + number.toString(),
            })
        }
    }

    addSignToString = (sign) => {
        //we don't allow set the operator as first character in the currentString
        if (this.state.secondNumber === "" && !(this.state.firstNumber === "")) {
            this.setState({
                operator: sign,
            })
        }
        if (this.state.operator !== "" && this.state.secondNumber !== "") {
            this.evaluateExpression();
            this.setState({
                operator: sign,
            })
        }
    }

    evaluateExpression = () => {
        if (this.state.operator !== "" && this.state.secondNumber !== "") {
            let newExpression = this.state.firstNumber + " " + this.state.operator + " " + this.state.secondNumber;
            try {
                let result = this.state.parser.evaluation(newExpression);
                newExpression += " = " + result;
                this.setState({
                    firstNumber: "" + result < 0 ? "" : result.toString(),
                    operator: "",
                    secondNumber: "",
                    resultsOfCalculation: [...this.state.resultsOfCalculation, newExpression]
                })
            } catch (e) {
                newExpression += " = " + e.message;
                this.setState({
                    firstNumber: "",
                    secondNumber: "",
                    operator: "",
                    resultsOfCalculation: [...this.state.resultsOfCalculation, newExpression]
                })
            }
        }
    }

    deleteCharacterInExpression = () => {
        if (this.state.secondNumber !== "") {
            this.setState({
                secondNumber: this.state.secondNumber.slice(0, this.state.secondNumber.length - 1)
            })
        } else if (this.state.operator !== "") {
            this.setState({
                operator: ""
            })
        } else {
            this.setState({
                firstNumber: this.state.firstNumber.slice(0, this.state.firstNumber.length - 1)
            })
        }
    }

    render() {
        const {
            firstNumber,
            secondNumber,
            operator,
            resultsOfCalculation,
            examples,
        } = this.state

        const resultString = firstNumber + " " + operator + " " + secondNumber;
        return (
            <Provider store={store}>
                <div className="todo-app">
                    <Header resultsOfCalculation={this.state.resultsOfCalculation}
                            currentString={resultString}></Header>
                    <Body addDigitalToString={this.addDigitalToString}
                          addSignToString={this.addSignToString}
                          deleteCharacter={this.deleteCharacterInExpression}
                          evaluateExpression={this.evaluateExpression}/>
                    <Button>Get and solve examples</Button>

                </div>
            </Provider>

        );
    }
}

const mapReduxStateToProps = reduxState => ({
    examples: reduxState.examples,
})

const mapDispatchToProps = (dispatch) => {
    const {
        fetchExamples,
    } = bindActionCreators(examplesActions, dispatch);

    return ({
        actionFetchExamples: fetchExamples,
    })
}

export default connect(mapReduxStateToProps, mapDispatchToProps)(App);
