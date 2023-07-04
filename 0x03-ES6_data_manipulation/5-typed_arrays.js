/* eslint-disable no-unused-vars */
export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const dataView = new DataView(buffer);
  try {
    const int8view = new Int8Array(buffer);
    int8view[position] = value;
  } catch (error) {
    throw new Error('Position outside range');
  }
  return dataView;
}
