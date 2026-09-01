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

