import React from "react";
import "./App.scss";
import Product from "./components/product/Product";
import UserInfo from "./components/UserInfo";
import MoneyBox from "./components/MoneyBox";
import { MoneyContextProvider, useMoney } from "./Context";

function App() {
  const productsinCart = [
    {
      name: "Dress",
      cost: 12.0
    },
    {
      name: "Shoes",
      cost: 5.0
    },
    {
      name: "Bag",
      cost: 3.0
    }
  ];

  const moneyState = useMoney(productsinCart);

  return (
    // <UserContextProvider value={ something }>
    <MoneyContextProvider value={ moneyState }>
      <div className="container">
        <h3>A very contrived rental cart</h3>
        <div className="row">
          <div className="col-md-9">
            {productsinCart.map(product => (
              <Product key={product.name} {...product} />
            ))}
          </div>
          <div className="col-md-3">
            <div className="mb-2">
              <UserInfo />
            </div>
            <MoneyBox />
          </div>
        </div>
      </div>
    </MoneyContextProvider>
    // </UserContextProvider>
  );
}

export default App;
