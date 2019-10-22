import React, { useContext } from "react";
import { MoneyContext } from "../Context";
import { currencyFormat } from "../Stuff";

function MoneyBox() {
  const shipping = 22.99;
  const shippingDisplay = currencyFormat(shipping);
  const moneyContext = useContext(MoneyContext);

  const subTotal = currencyFormat(moneyContext.productsTotal);
  const total = currencyFormat(shipping + moneyContext.productsTotal);

  return (
    <div>
      <div className="card text-white bg-primary mb-3">
        <div className="card-header">Stateful Context</div>
        <div className="card-body">
          <div className="lvp">
            <div className="text-muted">Sub-total</div>
            <div>{subTotal}</div>
          </div>
          <div className="lvp">
            <div className="text-muted">Shipping</div>
            <div>{shippingDisplay}</div>
          </div>
          <div className="lvp">
            <div className="text-muted">Total</div>
            <div>{total}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoneyBox;
