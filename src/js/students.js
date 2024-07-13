import studentsTemplate from "../templates/students.hbs";
import students from "../data/students.json";

const body = document.querySelector("body");

const studentsTable = studentsTemplate({ students });

body.insertAdjacentHTML("beforeend", studentsTable);
