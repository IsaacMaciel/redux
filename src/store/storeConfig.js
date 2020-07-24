import { createStore, combineReducers } from "redux";

const reducers = combineReducers({
    numeros: (state, action) => {
        console.log(action.type);
        switch (action.type) {
            case "NUM_MIN_ALTERADO":
                return {
                    ...state,
                    min: action.payload,
                };
            default:
                return {
                    min: 7,
                    max: 31,
                };
        }
    },
    nomes: (state, action) => {
        console.log(state, " ", action);
        return ["Ana", "Bia", "Carlos"];
    },
});

const storeConfig = () => createStore(reducers);

export default storeConfig;
