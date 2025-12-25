let students = JSON.parse(localStorage.getItem("students")) || [];

function displayStudents() {
  const list = document.getElementById("studentList");
  list.innerHTML = "";

  students.forEach((student, index) => {
    list.innerHTML += `
      <tr>
        <td>${student.name}</td>
        <td>${student.roll}</td>
        <td>${student.course}</td>
        <td><button onclick="deleteStudent(${index})">Delete</button></td>
      </tr>
    `;
  });
}

document.getElementById("studentForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const roll = document.getElementById("roll").value;
  const course = document.getElementById("course").value;

  students.push({ name, roll, course });
  localStorage.setItem("students", JSON.stringify(students));

  this.reset();
  displayStudents();
});

function deleteStudent(index) {
  students.splice(index, 1);
  localStorage.setItem("students", JSON.stringify(students));
  displayStudents();
}

displayStudents();