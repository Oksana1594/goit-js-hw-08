export const save = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log(error.message);
  }
};

export const load = key => {
  try {
    const dataEl = localStorage.getItem(key);
    return dataEl === null ? undefined : JSON.parse(dataEl);
  } catch (error) {
    console.log(error.message);
  }
};

export const remove = key => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.log(error.message);
  }
};
