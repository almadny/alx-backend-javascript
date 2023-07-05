export default function hasValuesFromArray(set, array) {
  if ((set instanceof Set) && Array.isArray(array)) {
    for (const element of array) {
      if (!set.has(element)) {
        return false;
      }
    }
    return true;
  }
  return 0;
}
