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
        country: 'England',
    }
};
var fullName = person.name.firstName + ' ' + person.name.lastName
document.getElementById('name').innerText += ' ' + fullName;
document.getElementById('mail').innerText += ' ' + person.email;
document.getElementById('phone').innerText += ' ' + person.phone;
document.getElementById('age').innerText += ' ' + person.age;
document.getElementById('designation').innerText += ' ' + person.designation;
document.getElementById('address').innerHTML +=
'<h5 style="margin-left: 100px; font-style: italic"> House Number: ' + person.address.houseNumber + 
'<br> Street: ' + person.address.street + 
'<br> City: ' + person.address.city + 
'<br> Country: ' + person.address.country +
'</h5>';