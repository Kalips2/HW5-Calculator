const receiveExamples = example => ({
    example,
    type: 'RECEIVE_EXAMPLES',
});

const requestExamples = () => ({
    type: 'REQUEST_EXAMPLES',
});

const errorReceiveExamples = (e) => ({
    type: 'ERROR_RECEIVE_EXAMPLES',
    message: e.message
});

const getExamples = (examplesCount) => {
    const url = 'http://localhost:8080/math/examples?count=' + examplesCount.toString();
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        }
    }
    return fetch(url, options);
}


const fetchExamples = ({examplesCount}) => (dispatch) => {
    dispatch(requestExamples());
    return getExamples(examplesCount)
        .then(examples => dispatch(receiveExamples(examples)))
        .catch(() => dispatch(errorReceiveExamples()))
}

export default {
    fetchExamples,
}
