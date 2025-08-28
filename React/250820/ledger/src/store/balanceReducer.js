export const totalBalance = () => {
    return { type: "SAVE" };
};

export const subtractBalance = () => {
    return { type: "SUBTRACT" };
};

const initialState = {
    balance: 0,
    usedAmout: 0,
};

const balanceReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SAVE":
            return { ...state, balance: state.balance };

        case "SUBTRACT":
            return { ...state, balance: state.balance - state.usedAmount };

        default:
            return state;
    }
};

export default balanceReducer;
