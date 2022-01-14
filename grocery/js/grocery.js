function calc(e) {
    var money = e.target.money.value;
    if (money == '' || money < 0)
        alert('Enter some valid amount');
    else if (money > 35) {
        r = money - 35;
        alert('You can buy Grocery & Ice-cream with ' + r + 'Rs remaining');
    } else if (20 <= money && money < 35) {
        r = money - 20;
        alert('You can only buy Grocery, not Ice-cream. ' + r + 'Rs remaining');
    } else {
        alert('You can neither buy Grocery or Ice-cream')
    }
    e.preventDefault();
}