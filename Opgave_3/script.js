let students = [
    { name: "Sofie", age: 25, course: "Webudvikler" },
    { name: "Lukas", age: 22, course: "Mediegrafiker" },
    { name: "Sofie", age: 25, course: "Teknisk designer" },
];

// variabel
let studentListDiv = document.querySelector(".student-list");

// For each loop
students.forEach(student => {
    let studentDiv = document.createElement("div");
    studentDiv.textContent = `${student.name}, Alder: ${student.age}, Uddannelse: ${student.course}`;
    studentListDiv.appendChild(studentDiv);
});
