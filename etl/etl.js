export const transform = (deliveredList) => {
  const keysList = Object.keys(deliveredList);
  const newList = {};
  
  keysList.forEach((key) => {
    deliveredList[key].forEach((element) => {
      element = element.toLowerCase();
      newList[element] = parseInt(key);
    });
  });

  return newList;
};
