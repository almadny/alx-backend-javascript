export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  if (position >= length) {
    throw new Error('Position outside range');
  } else {
    const dataView = new DataView(buffer);
    const int8view = new Int8Array(buffer);
    int8view[position] = value;
    return dataView;
  }
}
