import Lexer from "./Lexer";

const Tokens = {
    NUMBER: "number",
    PLUS: "plus",
    MINUS: "minus",
    MUL: "multiply",
    DIV: "divide",
    END_OF: "end of string"
}

class Parser {
    lexer;

    primary() {
        let text = this.lexer.currentTokenAsText;
        switch (this.lexer.currentToken) {
            case Tokens.NUMBER: {
                this.lexer.advance();
                return parseInt(text);
                break;
            }
        }
    }

    multiplyExpression() {
        let result = this.primary();

        for (; ;) {
            switch (this.lexer.currentToken) {
                case Tokens.MUL:
                    this.lexer.advance();
                    result = result * this.primary();
                    break;
                case Tokens.DIV:
                    this.lexer.advance();
                    //add check division to 0
                    let x = this.primary();
                    result /= x;
                    break;
                default:
                    return result;
            }
        }
    }

    addExpression() {
        let result = this.multiplyExpression();

        for (; ;) {
            switch (this.lexer.currentToken) {
                case Tokens.PLUS:
                    this.lexer.advance();
                    result += this.multiplyExpression();
                    break;
                case Tokens.MINUS:
                    this.lexer.advance();
                    result -= this.multiplyExpression();
                    break;
                default:
                    return result;
            }
        }
    }

    evaluation(input) {
        this.lexer = new Lexer(input);
        return this.addExpression();
    }

}
export default Parser;