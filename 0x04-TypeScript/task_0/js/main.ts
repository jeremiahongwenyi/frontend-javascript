interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Jeremiah",
  lastName: "Omare",
  age: 25,
  location: "Nairobi",
};

const student2: Student = {
  firstName: "Grace",
  lastName: "Mutua",
  age: 23,
  location: "Mombasa",
};

const studentsList: Student[] = [student1, student2];

// Create a table element
const table = document.createElement("table");
table.style.width = "50%";
table.style.border = "1px solid black";

// Create the table header
const headerRow = document.createElement("tr");
const header1 = document.createElement("th");
header1.textContent = "First Name";
const header2 = document.createElement("th");
header2.textContent = "Location";

headerRow.appendChild(header1);
headerRow.appendChild(header2);
table.appendChild(headerRow);

// Loop through the array and create a row for each student
studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = student.firstName;
  firstNameCell.style.border = "1px solid black";

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;
  locationCell.style.border = "1px solid black";

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});

// Append the table to the body
document.body.appendChild(table);
