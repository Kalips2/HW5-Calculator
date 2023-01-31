const initialState = {
    isError: false,
    listOfExamples: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'REQUEST_STUDENTS': {
            return {
                ...state,
                isError: false,
            };
        }
        case 'RECEIVE_STUDENTS': {
            const {
                examples,
            } = action;

            return {
                ...state,
                isError: false,
                listOfExamples: examples,
            };
        }
        case 'ERROR_RECEIVE_STUDENTS': {
            return {
                ...state,
                isError: true,
            };
        }
        default:
            return state;

    }
}