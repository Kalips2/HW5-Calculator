const Tokens = {
    NUMBER: "number",
    PLUS: "plus",
    MINUS: "minus",
    MUL: "multiply",
    DIV: "divide",
    END_OF: "end of string"
}

class Lexer {
    input;
    buffer;
    currentToken;
    currentTokenAsText;
    position = 0;
    length;

    constructor(input) {
        this.input = input.trim();
        this.length = this.input.length;
        this.currentToken = this.getToken();
        this.currentTokenAsText = this.buffer;
    }

    isCharDigit = n => n < 10;

    getToken() {
        this.buffer = "";
        if (this.position >= this.length || this.length === 0) {
            return Tokens.END_OF;
        }

        let currentCharacter = this.input.at(this.position);
        while (this.position < this.length && currentCharacter === ' ') {
            currentCharacter = this.input.at(++this.position);
        }

        if (this.isCharDigit(currentCharacter)) {
            this.buffer = this.buffer + currentCharacter;
            this.position++;
            while (this.position < this.length && this.isCharDigit(this.input.at(this.position))) {
                currentCharacter = (this.input.at(this.position));
                this.buffer = this.buffer + currentCharacter;
                this.position++;
            }
            return Tokens.NUMBER;
        }

        this.buffer = this.input.at(this.position);
        switch (this.buffer) {
            case "+":
                this.position++;
                return Tokens.PLUS;
                break;
            case "-":
                this.position++;
                return Tokens.MINUS;
                break;
            case "*":
                this.position++;
                return Tokens.MUL;
                break;
            case "/":
                this.position++;
                return Tokens.DIV;
                break;
            default:
                console.log("Не прав вираз!")
        }
    }

    advance() {
        if(this.currentToken !== Tokens.END_OF) {
            this.currentToken = this.getToken();
            this.currentTokenAsText = this.buffer;
        }
    }
}

export default Lexer;