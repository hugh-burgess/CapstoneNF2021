export function getItemsFromLocalStorage(key) {
  const data = JSON.parse(localStorage.getItem(key)) || [];

  return data;
}

export function addItemToLocalStorage(key, item) {
  const data = getItemsFromLocalStorage(key);

  item.id = Date.now();

  data.push(item);

  localStorage.setItem(key, JSON.stringify(data));
}

export function addProfileToLocalStorage(key, profile) {
  const newProfile = {
    id: Date.now(),
    ...profile,
  };
  localStorage.setItem(key, JSON.stringify(newProfile));
}

export function removeItemFromLocalStorageByName(key, itemName) {
  const data = getItemsFromLocalStorage(key);

  const newData = data.filter((item) => {
    return item.name !== itemName;
  });

  localStorage.setItem(key, JSON.stringify(newData));
}

export function removeItemFromLocalStorageById(key, id) {
  const data = getItemsFromLocalStorage(key);

  const newData = data.filter((item) => {
    return item.id !== id;
  });

  localStorage.setItem(key, JSON.stringify(newData));
}

export function saveJSONToLocalStorage(key, json) {
  localStorage.setItem(key, JSON.stringify(json));
}

export function getSingleDogFromLocalStorage(id) {
  const friends = JSON.parse(localStorage.getItem("friends"));
  return friends.find((friend) => friend.id === id);
}

export function addNotetoLocalStorage(key, item, note) {
  const array = getItemsFromLocalStorage(key);
  const foundObject = array.find((currywurst) => currywurst.name === item.name);
  foundObject.notes.push(note);

  localStorage.setItem(key, JSON.stringify(array));
}
