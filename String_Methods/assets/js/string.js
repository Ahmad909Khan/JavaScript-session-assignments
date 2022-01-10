function record() {
    var firstName = document.getElementById('first-name').value;
    var lastName = document.getElementById('last-name').value;
    var mail = document.getElementById('mail').value;
    var age = document.getElementById('age').value;
    firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
    lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
    var name = firstName + ' ' + lastName;
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
    }
}
