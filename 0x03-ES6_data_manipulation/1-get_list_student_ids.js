export default function getListStudentIds(students) {
  if (Array.isArray(students)) {
    const stdIds = students.map((student) => student.id);
    return stdIds;
  }
  const stdIds = [];
  return stdIds;
}
