export default function getListStudentIds(students, location) {
  if ((Array.isArray(students)) && (typeof location === 'string')) {
    const stdLoc = students.filter((student) => student.location === location);
    return stdLoc;
  }
  const stdLoc = [];
  return stdLoc;
}
