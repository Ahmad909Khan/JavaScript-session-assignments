function calc(e) {
    if (money.value > 35) {
        var r = money.value - 35;
        alert('You can buy Grocery & Ice-cream with ' + r + 'Rs remaining');
    } else if (20 < money.value && money.value < 35) {
        var r = money.value - 20;
        alert('You can only buy Grocery, not Ice-cream. ' + r + 'Rs remaining');
    } else {
        alert('You can neither buy Grocery or Ice-cream')
    }
    e.preventDefault();
}
var money = document.getElementById('money');
var btn = document.getElementById('submit');
btn.addEventListener('submit', calc)