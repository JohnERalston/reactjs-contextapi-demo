
import { createContext, useState } from 'react';


/*
    Static context
*/
const user = { name: 'John' };
export const UserContext = createContext(user);
export const UserContextProvider = UserContext.Provider;


export const useMoney = (_products) => {
    const [products/*, setProducts*/] = useState(_products.slice());
    const [productsTotal, setProductsTotal] = useState(getProductsTotal(_products));

    return {
        productsTotal,
        productUpdated
    };

    function productUpdated({name, days}) {
        const product = products.find(p => p.name === name);
        product.days = days;
        const total = getProductsTotal(products);
        setProductsTotal(total);
    }

    function getProductsTotal(products) {
        const total = products.reduce((accum, prod) => {
            return accum + (prod.cost * (prod.days||1));
        }, 0);
        return total;
    }
}


export const MoneyContext = createContext();
export const MoneyContextProvider = MoneyContext.Provider;



