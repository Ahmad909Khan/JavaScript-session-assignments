var person = {
    name: {
        firstName: 'John',
        lastName: 'Watson'
    },
    email: 'john@example.com',
    phone: '123-456-7890',
    age: 22,
    designation: 'Intern',
    address: {
        houseNumber: 221,
        street: 'Baker Street',
        city: 'London',
        country : 'England',
    }
};

var fullName = person.name.firstName + ' ' + person.name.lastName

console.log("Name: " + fullName);
console.log("E-mail: " + person.email);
console.log("Phone No.: " + person.phone);
console.log("Age: " + person.age);
console.log("Designation: " + person.designation);
console.log(person.address);
