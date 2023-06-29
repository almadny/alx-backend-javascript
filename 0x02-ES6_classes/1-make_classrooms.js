import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const classArray = [];
  classArray.push(new ClassRoom(19));
  classArray.push(new ClassRoom(20));
  classArray.push(new ClassRoom(34));
  return classArray;
}
