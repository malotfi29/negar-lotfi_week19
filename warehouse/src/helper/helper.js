const productQuantity = (state, id) => {
  const index = state.selectedItems.findIndex((item) => item.id === id);
 
  
  
  if (index === -1) {
    return 0;
  } else {
    return state.selectedItems[index].selectedQuantity;
  }
};

const sumProducts = (products) => {
  const itemsCounter = products.reduce(
    (acc, curr) => acc + curr.selectedQuantity,
    0
  );
  const total = products
    .reduce((acc, curr) => acc + curr.price * curr.selectedQuantity, 0)
    .toFixed(2);
  return { itemsCounter, total };
};

export { productQuantity, sumProducts };
