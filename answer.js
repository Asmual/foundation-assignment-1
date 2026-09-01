// Question 1: Value Detective
function describeValue(value) {
    const type = typeof value;
    const truthiness = value ? "truthy" : "falsy";
    return `${type} | ${truthiness}`;
}

// Test cases:
// console.log(describeValue("hello")); // "string | truthy"
// console.log(describeValue(""));      // "string | falsy"
// console.log(describeValue(25));      // "number | truthy"
// console.log(describeValue(0));       // "number | falsy"
// console.log(describeValue(true));    // "boolean | truthy"
// console.log(describeValue(null));    // "object | falsy"
// console.log(describeValue(undefined)); // "undefined | falsy"
// console.log(describeValue("0"));     // "string | truthy"
// console.log(describeValue(NaN));     // "number | falsy"

// Question 2: Bangladesh Weekend Machine
function getDayType(day) {
    const formattedDay = day.toLowerCase();

    switch (formattedDay) {
        case "friday":
        case "saturday":
            return "Weekend";
        case "sunday":
        case "monday":
        case "tuesday":
        case "wednesday":
        case "thursday":
            return "Working Day";
        default:
            return "Invalid Day";
    }
}

// Test cases:
// console.log(getDayType("Friday"));    // "Weekend"
// console.log(getDayType("friday"));    // "Weekend"
// console.log(getDayType("MONDAY"));    // "Working Day"
// console.log(getDayType("Bandarban")); // "Invalid Day"