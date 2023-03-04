
export const convertCsvToJson = (collections) => {
  const csvCollections = collections.trim().split('\n');
  const headers = csvCollections.shift().split('\t');

  const jsonCollections = csvCollections.map((collection) => {
    const elements = collection.trim().split('\t');
    return headers.reduce((acum, value, index) => {
      const isNumber = isNaN(Number(elements[index]));
      const isNumberReplace = isNaN(Number(elements[index].replace(',', '')));

      acum[value] = !isNumber || !isNumberReplace ? Number(elements[index].replace(',', '')) : elements[index];
      return acum;
    }, {});
  });

  return jsonCollections;
};
