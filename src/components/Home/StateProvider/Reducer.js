

export const initialState = {
    basket: [],
    user: null,
};

function reducer(state, action) {
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        case 'REMOVE_FROM_BASKET':
            let newBasket = [...state.basket];
            const index = state.basket.findIndex(item => item.id === action.id);
            // const targetId = removeId.map(tId => tId.id);
            // const obj = targetId.toString()
            // console.log(obj);
            if (index >= 0) {
                newBasket.splice(index, 1);
            } else {
                console.log("not deleted")
            }
            return {...state,
            basket: newBasket
            };
        default:
        return state;
    }
}

export default reducer;