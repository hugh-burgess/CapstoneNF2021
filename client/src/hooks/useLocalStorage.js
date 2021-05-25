import { useState } from "react";
// Adds new objects directly to localStorage
export default function useLocalStorage(key, initialValue) {
  const readFromLocalStorage = () => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  };

  const writeToLocalStorage = (value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  const [storedValue, setStoredValue] = useState(readFromLocalStorage);

  const setValue = (value) => {
    writeToLocalStorage(value);
    setStoredValue(value);
  };

  return [storedValue, setValue];
}
