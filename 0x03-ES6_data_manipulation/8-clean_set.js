export default function cleanSet(set, substring) {
  const array = [];
  if ((set instanceof Set) && (substring.length !== 0)) {
    for (const element of set) {
      if (element.startsWith(substring)) {
        const slicedpart = element.slice(substring.length);
        array.push(slicedpart);
      }
    }
  }
  const str = array.join('-');
  return str;
}
