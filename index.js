var customerName = 'bob'

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase()
}

var bestCustomer;
function setBestCustomer() {
    bestCustomer = 'not bob'
}

function overwriteBestCustomer() {
    return bestCustomer = 'maybe bob'
}

const leastFavoriteCustomer = 'Oliver'

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'Molly'
    return leastFavoriteCustomer
}