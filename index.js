const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']


function findMatching(driverArray,driverString) {
    return driverArray.filter(function(driver){return driver.toLowerCase() === driverString.toLowerCase()});
}

function fuzzyMatch(driverArray,driverString) {
    return driverArray.filter(function(driver) {
        if (driver.slice(0,2) === driverString.slice(0,2)) {
            return driver;
        } else {return null;}
    });

}

function matchName(driverArray,driverString) {
    console.log(driverArray);
    return driverArray.filter(function(driver) {
        return driver.name === driverString;
    })
    
}


