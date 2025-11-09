interface Student {
    firstName: string, 
    lastName:   string,
    age:number, 
    location:string
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

const studentsList : Student[] = [student1,student2]