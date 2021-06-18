// Write your solution in this file!
var customerName = 'bob';

function upperCaseCustomerName() {
    customerName = 'BOB';
}

function setBestCustomer() {
    window.bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'Ruben';
function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'not Ruben';
}