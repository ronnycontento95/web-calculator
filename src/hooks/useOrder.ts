import { useState } from "react";
import { MenuItem } from "../types/type_menu";

export default function useOrder(){

    const [order, setOrder] = useState<OrderItem>([]);
  const [tip, setTip] = useState(0);

  const addItem = (item: MenuItem) => {
    console.log(item);

    const itemExist = order.find(orderItem => orderItem.id === item.id);
    if (itemExist) {
      console.log("Ya existe......");

      const updateOrder = order.map(
        orderItem => orderItem.id === item.id ?
          { ...orderItem, quantity: orderItem + 1 }
          : orderItem
      )
      setOrder(updateOrder);

    } else {
      const newValue = { ...item, quantity: 1 }
      // const orderValue = {}
      setOrder([...order, newValue]);
    }

  }

  const removeItem = (id: MenuItem['id']) => {
    setOrder(order.filter(item => item.id !== id))
  }

  const placeOrder = () => {
    setOrder([])
    setTip(0)
  }
    return {
        order,
        addItem,
        placeOrder,
        removeItem,
        tip,
        setTip

    }

}