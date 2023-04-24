const setStorage = (key, data) => {
  const dataAsString = JSON.stringify(data);
  const encodedData = window.btoa(dataAsString);
  localStorage.setItem(key, encodedData);
};

const getStorage = (key) => {
  const encodedData = localStorage.getItem(key);
  if (!encodedData) {
    return null;
  }
  const decodedData = window.atob(encodedData);
  return decodedData;
};

const clearStorage = (key) => {
  localStorage.removeItem(key);
};

const storageHasData = () => localStorage.length > 0;