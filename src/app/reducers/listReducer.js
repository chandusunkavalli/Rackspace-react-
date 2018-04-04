import { list } from '../utils/constants';

const listReducer = (state = {
    results: []
}, action) => {
    switch (action.type) {
        case "LOAD_LIST_SUCCESS":
            state = {
                results:list
            };
            break;
    }
    return state;
};

export default listReducer;