export default function orderByProps(obj, arr) {
  const propCertain = [];
  const propFree = [];

  arr.forEach((item) => {
    if (item in obj) {
      propCertain.push({ key: item, value: obj[item] });
    }
  });

  for (const key in obj) {
    if (!arr.includes(key)) {
      propFree.push({ key, value: obj[key] });
    }
  }

  propFree.sort((a, b) => (a.key > b.key ? 1 : -1));
  return [...propCertain, ...propFree];
}
