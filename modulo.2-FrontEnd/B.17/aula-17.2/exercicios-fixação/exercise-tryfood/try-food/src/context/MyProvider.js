import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function MyProvider({ children }) {
  /* Passo 1 */
  const [orderList, setOrderList] = useState({
    comida: [],
    bebida: [],
    sobremesa: [],
  });

  const [updateCart, setUpdateCart] = useState(false);

  const showCart = () => {
    if (updateCart) {
      setUpdateCart(false);
    } else {
      setUpdateCart(true);
    }
  };

  /* Passo 8 */
  const removeItemFromList = (orderState, indexPresentInList, itemType) => {
    orderState.filter((item) => item === orderState[indexPresentInList]);
    setOrderList({
      ...orderList,
      [itemType]: orderState,
    });
  };

  /* Passo 9 */
  const updateValueItemInList = (orderState, indexPresentInList, newItem) => {
    orderState.splice(indexPresentInList, 1, newItem);
    setOrderList({
      ...orderList,
      [newItem.itemType]: orderState,
    });
  };

  /* Passo 7 */
  const manageItemsInList = (newItem) => {
    const orderState = orderList[newItem.itemType];
    const indexPresentInList = orderState.findIndex((item) => item.id === newItem.id);
    if (Number(newItem.quantity) < 0) {
      return removeItemFromList(orderState, indexPresentInList, newItem.itemType);
    } if (Number(newItem.quantity) === 0) {
      return alert('Não existem mais itens desse tipo em seu carrinho!');
    }
    return updateValueItemInList(orderState, indexPresentInList, newItem);
  };

  /* Passo 6 */
  const addItemToList = (newItem) => {
    setOrderList({
      ...orderList,
      [newItem.itemType]: [...orderList[newItem.itemType], newItem],
    });
  };

  /* Passo 2 */
  const handleChange = ({ target }, itemName, itemPrice, itemType) => {
    /* Passo 3 */
    const { value } = target;

    const newItem = {
      id: itemName,
      quantity: value,
      totalPrice: (value === 0 ? 0 : itemPrice * value),
      itemType,
    };
    /* Passo 4 */
    const isPresentInList = orderList[itemType].some((item) => itemName === item.id);

    /* Passo 5 */
    if (!isPresentInList) {
      return addItemToList(newItem);
    } return manageItemsInList(newItem);
  };

  return (
    <MyContext.Provider value={ { handleChange, orderList, updateCart, showCart } }>
      { children }
    </MyContext.Provider>
  );
}

MyProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default MyProvider;
