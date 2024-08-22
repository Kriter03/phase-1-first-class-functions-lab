const returnFirstTwoDrivers = function () {
    return ['Antonia', 'Nuru']
}
const returnLastTwoDrivers = function () {
    return ['Amari', 'Mo']
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
const createFareMultiplier = function () {
    return function () {
         return 25
    }
}
function fareDoubler() {
    return 20
}
function fareTripler() {
    return 36
}
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

// Function to return the first two drivers
const firstTwoDrivers = function (drivers) {
  return drivers.slice(0, 2);
};

// Function to return the last two drivers
const lastTwoDrivers = function (drivers) {
  return drivers.slice(-2);
};

// Higher-order function to select drivers based on a callback function
const selectDifferentDrivers = function (drivers, callback) {
  return callback(drivers);
};
