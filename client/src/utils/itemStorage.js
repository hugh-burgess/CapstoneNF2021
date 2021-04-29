export function getItemsFromLocalStorage(key) {
  const data = JSON.parse(localStorage.getItem(key)) || [];

  return data;
}

export function addItemToLocalStorage(key, item) {
  const data = getItemsFromLocalStorage(key);

  data.push(item);

  localStorage.setItem(key, JSON.stringify(data));
}

export function removeItemFromLocalStorageByName(key, itemName) {
  const data = getItemsFromLocalStorage(key);

  const newData = data.filter((item) => {
    return item.name !== itemName;
  });

  localStorage.setItem(key, JSON.stringify(newData));
}
