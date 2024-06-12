// src/utils/localStorageHelper.js

export const saveDataLocally = (data) => {
    localStorage.setItem('formData', JSON.stringify(data));
  };
  
  export const getLocalData = () => {
    const data = localStorage.getItem('formData');
    return data ? JSON.parse(data) : null;
  };
  
  export const clearLocalData = () => {
    localStorage.removeItem('formData');
  };
  