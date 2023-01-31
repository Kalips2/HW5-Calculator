const initialState = {
    isLoading: false,
    isError: false,
    list: [],
    name: "This is students!"
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'REQUEST_STUDENTS': {
            return {
                ...state,
                isLoading: true,
                isError: false,
            };
        }
        case 'RECEIVE_STUDENTS': {
            const {
                students,
            } = action;

            return {
                ...state,
                isLoading: false,
                isError: false,
                list: students,
            };
        }
        case 'ERROR_RECEIVE_STUDENTS': {
            return {
                ...state,
                isLoading: false,
                isError: true,
            };
        }
        default:
            return state;

    }
}