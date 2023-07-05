export default function cleanSet(set, startString) {
  const array = [];
  if ((set instanceof Set) && (startString.length !== 0)) {
    for (const element of set) {
      if (element.startsWith(startString)) {
        const slicedpart = element.slice(startString.length);
        array.push(slicedpart);
      }
    }
  }
  const str = array.join('-');
  return str;
}
