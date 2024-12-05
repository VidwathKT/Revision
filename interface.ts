// Step 1: Define an interface to represent the structure of a user
interface User {
    id: number; // Unique identifier for the user
    name: string; // Name of the user
    email: string; // Email address of the user
    isActive: boolean; // Whether the user is currently active
}

// Step 2: Create a function that accepts an object adhering to the User interface
function printUserDetails(user: User): void {
    // Display user details
    console.log(`ID: ${user.id}`);
    console.log(`Name: ${user.name}`);
    console.log(`Email: ${user.email}`);
    console.log(`Active: ${user.isActive ? "Yes" : "No"}`);
}

// Step 3: Create a function to update the user's active status
function updateUserStatus(user: User, status: boolean): User {
    // Return a new object with updated active status
    return { ...user, isActive: status };
}

// Step 4: Create some user objects that conform to the User interface
const user1: User = {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
    isActive: true,
};

const user2: User = {
    id: 2,
    name: "Bob",
    email: "bob@example.com",
    isActive: false,
};

// Step 5: Call the functions and work with the interface
console.log("User 1 Details:");
printUserDetails(user1); // Output details of user1

console.log("\nUpdating User 2 Status...");
const updatedUser2 = updateUserStatus(user2, true); // Update user2's status
printUserDetails(updatedUser2); // Output updated details of user2


//Output:-
// User 1 Details:
// ID: 1
// Name: Alice
// Email: alice@example.com
// Active: Yes

// Updating User 2 Status...
// ID: 2
// Name: Bob
// Email: bob@example.com
// Active: Yes
