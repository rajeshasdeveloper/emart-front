// For Add Item to Cart
export const addCart = (product) => {
    return {
        type: 'ADDITEM',
        payload: product,
    };
};

// For Delete Item in Cart
export const delCart = (product) => {
    return {
        type: 'DELITEM',
        payload: product,
    };
};
