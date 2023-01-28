import {Component, createRef, useEffect} from "react";
import './App.css'
import Header from "./components/header/header";
import Body from "./components/body/app-body";
import Parser from "./parser/Parser";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            parser: new Parser(),
            currentString: "",
            resultsOfCalculation: []
        }
        this.addDigitalToString = this.addDigitalToString.bind(this);
        this.addSignToString = this.addSignToString.bind(this);
        this.evaluateExpression = this.evaluateExpression.bind(this);
    }

    signs = "+-/*";
    addDigitalToString = (number) => {
        this.setState({
            currentString: this.state.currentString + number.toString(),
        })
    }

    addSignToString = (sign) => {
        //we don't allow set the operator as first character in the currentString
        if (this.state.currentString.length > 0) {
            //if
            if (!this.signs.includes(this.state.currentString.charAt(this.state.currentString.length - 2))) {
                this.setState({
                    currentString: this.state.currentString + " " + sign + " ",
                })
            } else {
                this.setState({
                    currentString: this.state.currentString.slice(0, this.state.currentString.length - 2) + sign + " ",
                })
            }
        }

    }

    deleteLastCharacter = () => {
        if (this.signs.includes(this.state.currentString.charAt(this.state.currentString.length - 2))) {
            this.setState({
                currentString: this.state.currentString.slice(0, this.state.currentString.length - 3)
            })
        } else {
            this.setState({
                currentString: this.state.currentString.slice(0, this.state.currentString.length - 1)
            })
        }

    }

    evaluateExpression = () => {
        let newExpression = this.state.currentString;
        try {
            let result = this.state.parser.evaluation(newExpression);
            if (!isNaN(result)) {
                newExpression += " = " + result;
                //parser
                this.setState({
                    currentString: "" + result < 0 ? "" : result.toString(),
                    resultsOfCalculation: [...this.state.resultsOfCalculation, newExpression]
                })
            }
        } catch (e) {
            newExpression += " = " + e.message;
            this.setState({
                currentString: "",
                resultsOfCalculation: [...this.state.resultsOfCalculation, newExpression]
            })
        }

    }

    render() {
        return (
            <div className="todo-app">
                <Header resultsOfCalculation={this.state.resultsOfCalculation}
                        currentString={this.state.currentString}></Header>
                <Body addDigitalToString={this.addDigitalToString}
                      addSignToString={this.addSignToString}
                      deleteCharacter={this.deleteLastCharacter}
                      evaluateExpression={this.evaluateExpression}/>
            </div>

        );
    }
}

export default App;
