let students = [
  {
    name: "João",
    firstGrade: 8,
    secondGrade: 7
  },
  {
    name: "Paulo",
    firstGrade: 7,
    secondGrade: 6
  },
  {
    name: "John",
    firstGrade: 10,
    secondGrade: 9
  },
  {
    name: "Jessica",
    firstGrade: 10,
    secondGrade: 10
  }
]

function studentAverage(grade1, grade2) {
  return (grade1 + grade2) / 2
}

function printStudentAverage(student) {
  return `A média do(a) aluno(a) ${student.name} é: ${studentAverage(student.firstGrade, student.secondGrade).toFixed(2)}`
}

for (let student of students) {
  let averagePrint = printStudentAverage(student)
  if(studentAverage(student.firstGrade, student.secondGrade) >= 7) {
    alert(`${averagePrint} \n Parabéns, ${student.name}! Você foi aprovado(a) no concurso!`)
  } else {
    alert(`${averagePrint} \n Não foi dessa vez, ${student.name}! Tente novamente!`)
  }
} 