export default function setFromArray(array) {
  if (Array.isArray(array)) {
    const arraySet = new Set(array);
    return arraySet;
  }
  return undefined;
}
