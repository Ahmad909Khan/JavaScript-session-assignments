function record(e) {
    e.preventDefault();
    var firstName = e.target.firstName.value;
    var lastName = e.target.lastName.value;
    var mail = e.target.mail.value;
    var age = e.target.age.value;
    firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
    lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
    var name = firstName + ' ' + lastName;
    if(firstName == '' || lastName == '' || mail == ''|| age == '')
    alert('Please enter all fields properly');
    document.getElementById('records').classList.remove('d-none');
    document.getElementById('show-name').innerText = 'Name: ' + name;
    document.getElementById('show-mail').innerText = 'E-Mail: ' + mail;
    document.getElementById('show-age').innerText = 'Age: ' + age;
    if (age == '' || age < 0) {
        document.getElementById('category').innerText = 'Category: ' + 'Invalid';
    }
    else if (age <= 10) {
        document.getElementById('category').innerText = 'Category: ' + 'Kid';
    } else {
        document.getElementById('category').innerText = 'Category: ' + 'Genius';
    };
};