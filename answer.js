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

// Question 3: Username Gatekeeper
function validateUsername(username) {
    if (username.length < 4) {
        return "Too Short";
    }
    if (username.includes(" ")) {
        return "No Space Allowed";
    }
    if (username.toLowerCase().includes("admin")) {
        return "Reserved Word";
    }
    return "Available";
}

// Test cases:
// console.log(validateUsername("rahim123"));    // "Available"
// console.log(validateUsername("ab"));          // "Too Short"
// console.log(validateUsername("a b"));         // "Too Short"
// console.log(validateUsername("abcd"));        // "Available"
// console.log(validateUsername("rahim islam")); // "No Space Allowed"
// console.log(validateUsername("superadmin99"));// "Reserved Word"
// console.log(validateUsername("Admin_Rahim")); // "Reserved Word"

// Question 4: Dhaka CNG Fare Meter
function getCngFare(distance, isNight = false, waitingMinutes = 0) {
    let fare = 0;

    if (distance <= 2) {
        fare += 50;
    } else {
        fare += 50 + (distance - 2) * 15;
    }

    fare += waitingMinutes * 2;

    if (isNight) {
        fare += fare * 0.20;
    }

    return fare;
}

// Test cases:
// console.log(getCngFare(2));                // 50
// console.log(getCngFare(1));                // 50
// console.log(getCngFare(5));                // 95
// console.log(getCngFare(10));               // 170
// console.log(getCngFare(5, false, 10));     // 115
// console.log(getCngFare(5, true));          // 114
// console.log(getCngFare(5, true, 10));      // 138

