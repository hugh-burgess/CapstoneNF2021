export function getDogsFilteredByName(dogs, filter) {
  return dogs.filter(
    (dog) => dog.name.toLowerCase().includes(filter) || filter === ""
  );
}
