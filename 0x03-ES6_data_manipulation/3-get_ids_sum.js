export default function getStudentIdsSum(students) {
  if (Array.isArray(students)) {
    const stdIdSum = students.reduce((accumulator, student) => accumulator + student.id, 0);
    return stdIdSum;
  }
  const sum = 0;
  return sum;
}
