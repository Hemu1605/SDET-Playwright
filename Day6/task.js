// #######################################
// Question1 - The Flight Booking Data Cleaner
// #######################################


// Step 1

const rawFlights = [
    "London-Paris:150",
    "New York-Tokyo:invalid",
    "Dubai-Mumbai:450",
    "Berlin-Rome:95"
];

function cleanFlightData(flights) {

    // Step 2: Convert raw strings into objects
    const formattedFlights = flights.map(flight => {

        // Split by :
        const parts = flight.split(":");

        // Left side => cities
        const route = parts[0];

        // Right side => price
        const rawPrice = parts[1];

        // Split cities
        const cities = route.split("-");

        const from = cities[0];
        const to = cities[1];

        // Step 3: Convert price into Number
        let price = Number(rawPrice);

        // Validation
        if (isNaN(price)) {
            price = 0;
        }

        return {
            from: from,
            to: to,
            price: price
        };
    });

    // Step 4: Filter flights between 100 and 500
    const filteredFlights = formattedFlights.filter(flight => {
        return flight.price >= 100 && flight.price <= 500;
    });

    // Step 4: Sort by price 
    // Step 5:ascending
    filteredFlights.sort((a, b) => a.price - b.price);

    // Step 6: Convert into JSON string
    return JSON.stringify(filteredFlights, null, 2);
}

const result = cleanFlightData(rawFlights);

console.log(result);


// #######################################
// Question2 - The E-Commerce Discount Applicator
// #######################################

// Step 1: The Pipeline
const cart = [
    { name: "Smartphone", price: 800, category: "Electronics" },
    { name: "Toaster", price: 50, category: "Home" },
    { name: "Headphones", price: 250, category: "Electronics" },
    { name: "Monitor", price: 150, category: "Electronics" }
];


// Step 2: The Callback (isEligible)
function isEligible(product) {

    return (
        product &&
        product.category === "Electronics" &&
        product.price > 200
    );
}


// Step 3: Transformation
function applyPromo(cart, promoCallback) {

    let discountedCount = 0;
    let totalSavings = 0;

    const updatedCart = cart.map(product => {

        // Check eligibility
        if (promoCallback(product)) {

            const oldPrice = product.price;

            // 10% discount
            const newPrice = oldPrice - (oldPrice * 0.10);

            // Calculate savings
            totalSavings += oldPrice - newPrice;

            discountedCount++;

            return {
                ...product,
                price: newPrice,
                isDiscounted: true
            };

        } else {

            return {
                ...product,
                isDiscounted: false
            };
        }
    });

    // Step 4: Final Summary using template literal
    console.log(
        `Promotion applied! ${discountedCount} items were discounted for a total saving of $${totalSavings}.`
    );

    // Step 5: Delayed Return
    setTimeout(() => {
        console.log(updatedCart);
    }, 1000);
}



applyPromo(cart, isEligible);


// #######################################
// Question3 - The Movie Stream Analytics
// #######################################


// Step 1
const rawMovies = [
    "Inception|Sci-Fi|12000",
    "The Lion King|Animation|8000",
    "Mad Max|Action|invalid",
    "The Matrix|Sci-Fi|15000",
    "Gladiator|Action|4500"
];

function analyzeMovies(movies) {

    // Step 2: Convert strings into objects
    const formattedMovies = movies.map(movie => {

        
        const parts = (movie || "").split("|");

        const name = parts[0] || "Unknown";
        const genre = parts[1] || "Unknown";

        let views = Number(parts[2]);

        // Step 3:
        if (isNaN(views)) {
            views = 0;
        }

        return {
            name,
            genre,
            views
        };
    });

    // Step 4:  movies with views > 5000
    const filteredMovies = formattedMovies.filter(movie => {

        return (
            (movie.genre === "Action" || movie.genre === "Sci-Fi") &&
            movie.views > 5000
        );
    });

    // Step 5: Sort by views descending
    filteredMovies.sort((a, b) => b.views - a.views);

    // Step 6: Return JSON string
    return JSON.stringify(filteredMovies, null, 2);
}

const result = analyzeMovies(rawMovies);

console.log(result);


// #######################################
// Question4 - The Automated Payroll Processor
// #######################################


const employees = [
    { id: 101, name: "Alice", salary: 6000 },
    { id: 102, name: "Bob", salary: 3500 },
    { id: 103, name: "Charlie", salary: 5200 }
];


// Step 1: Callback Function
function taxLogic(salary) {

    // Handle invalid salary safely
    if (typeof salary !== "number" || isNaN(salary)) {
        return 0;
    }

    // Tax Rules
    return salary > 5000 ? 0.20 : 0.10;
}


// Step 2: 
function calculatePayroll(employees, taxCallback) {

    let totalNetPayout = 0;

    const processedEmployees = employees.map(employee => {

        const salary = employee.salary || 0;

        // Get tax rate using callback
        const taxRate = taxCallback(salary);

        // Calculate tax
        const taxAmount = salary * taxRate;

        // Step 3: Net Salary
        const netSalary = salary - taxAmount;

        // Add to total payout
        totalNetPayout += netSalary;

        // Status
        const status = netSalary > 4000
            ? "Premium"
            : "Standard";

        return {
            ...employee,
            taxRate: `${taxRate * 100}%`,
            taxAmount,
            netSalary,
            status
        };
    });

    // Step 4: Template Literal 
    console.log(
        `Payroll Processed: Total Net Payout is $${totalNetPayout} for ${processedEmployees.length} employees.`
    );

    // Step 5:
    setTimeout(() => {
        console.log(processedEmployees);
    }, 2000);
}



calculatePayroll(employees, taxLogic);
