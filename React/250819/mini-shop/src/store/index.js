import { createStore } from "redux";

// 액션 타입
const ADD_ITEM = "ADD_ITEM";
const REMOVE_ITEM = "REMOVE_ITEM";
const REMOVE_ALL = "REMOVE_ALL";

// 액션 생성자
export const addItem = (item) => {
    type: ADD_ITEM, item;
};
export const removeItem = (item) => {
    type: REMOVE_ITEM, item;
};
export const removeAll = (item) => {
    type: REMOVE_ALL, item;
};

// 초기 상태
const initialState = {
    items: [], // {id, name, price, inCart}
};

// reducer
export function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_ITEM:
            const exits = state.items.some(
                (item) => item.id === action.payload.id
            );

            if (exists) return state;

            return { ...state, items: [...state.items, action.payload] };
        case REMOVE_ITEM:
            return {
                ...state,
                items: state.items.filter((item) => item.id !== action.payload),
            };
        case REMOVE_ALL:
            return { ...state, items: [] };
    }
}

// 장바구니에 담긴 상품 전체 배열
export const selectCartItems = (state) => state.cart.items;

//장바구니에 담긴 상품 개수
export const selectCartCount = (state) => state.cart.items.length;

// 모든 상품의 가격을 합산한 총 금액
export const selctCartTotal = (state) =>
    state.cart.items.reduce((sum, item) => {
        sum + item.price;
    }, 0);

// Store 생성
const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
