const cart = [];

const handleCart = (state = cart, action) => {
    const product = action.payload;
    switch (action.type) {
        case 'ADDITEM':
            // Check if Product already exists.
            const exist = state.find((x) => x.id === product.id);
            if (exist) {
                return state.map((x) =>
                    x.id === product.id ? { ...x, qty: x.qty + 1 } : x
                );
            } else {
                const product = action.payload;
                return [
                    ...state,
                    {
                        ...product,
                        qty: 1,
                    },
                ];
            }
            break;
        case 'DELITEM':
            const delExist = state.find((x) => x.id === product.id);

            if (delExist === 1) {
                return state.filter((x) => x.id !== product.id);
            } else {
                return state.map((x) =>
                    x.id === product.id ? { ...x, qty: x.qty - 1 } : x
                );
            }
            break;

        default:
            return state;
            break;
    }
};

export default handleCart;
