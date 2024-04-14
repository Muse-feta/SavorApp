import React from 'react'
import OrderStatusBanner from '../components/orderStatus/OrderStatusBanner';
import OrderStatusComp from '../components/orderStatus/OrderStatusComp';

const OrderStatus = () => {
  return (
    <div className="">
      <OrderStatusBanner/>
      <OrderStatusComp/>
    </div>
  );
}

export default OrderStatus