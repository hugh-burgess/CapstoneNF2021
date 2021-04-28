export function getItemsFromLocalStorage() {
  const friends = JSON.parse(localStorage.getItem("friends")) || [];

  return friends;
}

export function addItemToLocalStorage(item) {
  const friends = getItemsFromLocalStorage();

  friends.push(item);

  localStorage.setItem("friends", JSON.stringify(friends));
}

export function removeItemFromLocalStorage(itemName) {
  const friends = getItemsFromLocalStorage();

  const newItems = friends.filter((friend) => {
    return friend.name !== itemName;
  });

  localStorage.setItem("friends", JSON.stringify(newItems));
}
