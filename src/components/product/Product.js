import React, { useState, useContext } from "react";
import { currencyFormat } from '../../Stuff';
import Button from "react-bootstrap/button";
import "./Product.scss";
import { MoneyContext } from "../../Context";

function Product({ name, cost }) {
  const [days, setDays] = useState(1);
  const [extCost, setExtCost] = useState(days * cost);
  const moneyStateContext = useContext(MoneyContext);

  return (
    <div className="product">
      <div className="lvp">
        <div>Name</div>
        <div>{name}</div>
      </div>

      <div className="product-details">
        <div className="lvp">
          <div>Days</div>
          <div className="days-ctrl">
            <Button onClick={decDays} variant="link">
              -
            </Button>
            {days}
            <Button onClick={incDays} variant="link">
              +
            </Button>
          </div>
        </div>

        <div className="lvp">
          <div>Unit Cost</div>
          <div>{currencyFormat(cost)}</div>
        </div>

        <div className="lvp">
          <div>Ext. Cost</div>
          <div>{currencyFormat(extCost)}</div>
        </div>
      </div>
    </div>
  );

  function incDays() {
    const _days = days + 1;
    setDays(_days);
    setExtCost(_days * cost);
    update(_days);
  }

  function decDays() {
    if (days < 2) return;
    const _days = days - 1;
    setDays(_days);
    setExtCost(_days * cost);
    update(_days);
  }

  function update(days) {
    moneyStateContext.productUpdated({name, days});
  }

  
}

export default Product;
