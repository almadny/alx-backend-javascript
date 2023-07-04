export default function updateStudentGradeByCity(students, city, newGrades) {
  if ((Array.isArray(students)) && (Array.isArray(newGrades))) {
    const StdGrade = students.filter((student) => student.location === city)
      .map((student) => {
        const stdpre = newGrades.find((element) => element.studentId === student.id);
        if (stdpre) {
          return { ...student, grade: stdpre.grade };
        }
        return { ...student, grade: 'N/A' };
      });
    return StdGrade;
  }
  const empty = [];
  return empty;
}
