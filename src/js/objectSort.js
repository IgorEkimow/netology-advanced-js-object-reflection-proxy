export default function sortingProperties(object, array) {
  const sortingByKeys = [];
  const sortingByName = [];
  for (const key in object) {
    if (array.includes(key)) {
      sortingByKeys.push({ key, value: object[key] });
    } else {
      sortingByName.push({ key, value: object[key] });
    }
  }
  sortingByName.sort((a, b) => ((a.key > b.key) ? 1 : -1));
  return [...sortingByKeys, ...sortingByName];
}
