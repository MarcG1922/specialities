const express = require("express");
const app = express();
const PORT = 3000;

const usersData = [
  { id: 1, name: 'Alice', age: 28, specialty: 'marketing' },
  { id: 2, name: 'Bob', age: 35, specialty: 'developers' },
  { id: 3, name: 'Charlie', age: 30, specialty: 'developers' },
  { id: 4, name: 'David', age: 25, specialty: 'QAs' },
  { id: 5, name: 'Emma', age: 32, specialty: 'ventas' },
  { id: 6, name: 'Frank', age: 28, specialty: 'marketing' },
  { id: 7, name: 'Grace', age: 34, specialty: 'developers' },
  { id: 8, name: 'Hank', age: 27, specialty: 'QAs' },
  { id: 9, name: 'Ivy', age: 31, specialty: 'ventas' },
  { id: 10, name: 'Jack', age: 29, specialty: 'marketing' },
  { id: 11, name: 'Karen', age: 36, specialty: 'developers' },
  { id: 12, name: 'Leo', age: 26, specialty: 'QAs' },
  { id: 13, name: 'Mia', age: 33, specialty: 'ventas' },
  { id: 14, name: 'Nathan', age: 30, specialty: 'marketing' },
  { id: 15, name: 'Olivia', age: 37, specialty: 'developers' },
  { id: 16, name: 'Paul', age: 24, specialty: 'QAs' },
  { id: 17, name: 'Quinn', age: 32, specialty: 'ventas' },
  { id: 18, name: 'Ryan', age: 28, specialty: 'marketing' },
  { id: 19, name: 'Sara', age: 35, specialty: 'developers' },
  { id: 20, name: 'Tom', age: 29, specialty: 'QAs' },
  { id: 21, name: 'Uma', age: 30, specialty: 'ventas' },
  { id: 22, name: 'Victor', age: 27, specialty: 'marketing' },
  { id: 23, name: 'Wendy', age: 34, specialty: 'developers' },
  { id: 24, name: 'Xander', age: 31, specialty: 'QAs' },
  { id: 25, name: 'Yara', age: 33, specialty: 'ventas' },
  { id: 26, name: 'Zack', age: 28, specialty: 'marketing' },
  { id: 27, name: 'Ava', age: 36, specialty: 'developers' },
  { id: 28, name: 'Bryan', age: 26, specialty: 'QAs' },
  { id: 29, name: 'Cynthia', age: 32, specialty: 'ventas' },
  { id: 30, name: 'Derek', age: 30, specialty: 'marketing' },
];


function filterBySpecialty(specialty) {
  return usersData.filter(user => user.specialty === specialty);
}


function navigation() {
  return `
    <nav>
      <a href="/">Home</a> |
      <a href="/marketing">Marketing</a> |
      <a href="/developers">Developers</a> |
      <a href="/QAs">QAs</a> |
      <a href="/ventas">Ventas</a>
    </nav>
    <hr>
  `;
}

function specialtyPage(title, users) {
  return `
    ${navigation()}
    <h1>${title}</h1>
    <p>Número de personas: <strong>${users.length}</strong></p>

    <ul>
      ${users
        .map(
          user => `
          <li>
            <strong>${user.name}</strong> - ${user.age} años
          </li>
        `
        )
        .join("")}
    </ul>

    <a href="/">Volver al Home</a>
  `;
}


app.get("/", (req, res) => {
  res.send(`
    ${navigation()}
    <h1>Listado de Usuarios por Especialidad</h1>
    <p>Selecciona una especialidad para ver los usuarios.</p>
  `);
});

app.get("/marketing", (req, res) => {
  const users = filterBySpecialty("marketing");
  res.send(specialtyPage("Marketing", users));
});

app.get("/developers", (req, res) => {
  const users = filterBySpecialty("developers");
  res.send(specialtyPage("Developers", users));
});

app.get("/QAs", (req, res) => {
  const users = filterBySpecialty("QAs");
  res.send(specialtyPage("QAs", users));
});

app.get("/ventas", (req, res) => {
  const users = filterBySpecialty("ventas");
  res.send(specialtyPage("Ventas", users));
});


app.use((req, res) => {
  res.status(404).send(`
    ${navigation()}
    <h1>404 - Página no encontrada</h1>
    <p>La ruta <strong>${req.path}</strong> no existe.</p>
    <a href="/">Volver al Home</a>
  `);
});


app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
