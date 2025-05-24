//TODO 📚 Module 3 - Lesson 08: Destructuring and Naming

//? 1️⃣ Theoretical Aspects (In-Depth Theory)
//* A. 🔹 What is Destructuring?
//  Destructuring is a shorthand syntax that lets you extract properties or elements from objects and arrays into variables.

//  ✅ Object Destructuring:

const user = { name: 'Alice', age: 30 };
const { name, age } = user;
console.log(name);

//  ✅ Array Destructuring:

const nums = [10, 20, 30];
const [first, second] = nums;
console.log(second);

//* B. 💡 Why Use It?
//  • Makes your code cleaner and more expressive.
//  • Reduces repetition (obj.key everywhere).
//  • Helps when working with function parameters, APIs, component props.

//* C. 🕰️ Historical Context
//  Introduced in ES6 (2015) — part of modernizing JavaScript syntax to reduce verbosity and support more readable functional patterns.

//* D. ⚡ Best Practices and Pitfalls
//  ✅ Best Practices:
//  • Use destructuring for function params and return values.
//  • Rename variables during destructuring for clarity (userName = user.name).
//  ⚠️ Pitfalls:
//  • Destructuring undefined or null throws an error.
//  • Avoid over-destructuring deeply nested objects unless it is readable.

//* E. 🎲 Real-World Analogy
//  Imagine unpacking a toolkit:
//  • Instead of accessing toolkit.hammer or toolkit.screwdriver, you pull them out once:

//? const { hammer, screwdriver } = toolkit;

//* F. Destructuring with Renaming

const product = { name: 'Phone', price: 999 };
const { name: productName, price: productPrice } = product;
console.log(productName);

//  ✅ This is essential when avoiding naming collisions or improving clarity.

//* G. Destructuring in Function Parameters

function displayProduct({ name, price }) {
    console.log(`${name} costs $${price}`);
};

//? 2️⃣ Inquiry and Application
//  🤔 Guided Questions:
//  • When might renaming destructured values improve readability?
//  • Can you destructure from a nested object?

//* ✍️ Small Exercise:

const settings = {
    theme: 'dark',
    layout: 'grid',
    features: { Notification: true, autoSave: false },
};

//  Extract:
//  • theme into a variable
//  • notifications into a variable named hasNotifications

//! Solution

const { theme } = settings;
console.log(theme);

const { notifications: hasNotifications } = settings.features;
console.log(hasNotifications);

//? 3️⃣ Mini Quiz
//  1. What is the purpose of destructuring?
//! Answer: The purpose of destructuring is to extract properties or elements from objects and arrays into variables. Making your code less repetitive. Making it cleaner to work with structured data (objects, arrays, JSON, etc.)

//  2. How do you rename a destructured variable?
//! Answer: To rename a variable during destructuring, use the syntax const { originalKey: newVariableName } = object;

//* Example
const user2 = { name: 'Alice' };
const { name: userName } = user2;
console.log(userName);

//  3. What happens if you destructure a property that does not exist?
//! Answer: Destructuring a property that does not exist will result 'undefined'.

//* Example
const user3 = { name: 'Alice' };
const { age2 } = user3;
console.log(age2); // undefined

//* To avoid undefined, we must use default values:
//  ✅ This sets age to 30 if it is missing.

const { age3 = 30 } = user;

//  4. Can you destructure inside function parameters?
//! Answer: JavaScript allows us to extract values from an object or array passed as a parameter to a function. Destructuring parameters is quite straightforward, as we only need to use the destructuring syntax inside the function: function greet({ name, age }) { console. log(`Hello, ${name}.

//* Example

function greet({ name, age }) {
    console.log(`Hello, ${name}. You are ${age} years onload.`);
};

const person = { name: 'Alice', age: 30 };
greet(person);

//  5. What does this output?

const [a, , b] = [1, 2, 3];
console.log(b);

//! Answer: 3 - because the destructuring uses similar syntax but uses it on the left-hand side of the assignment instead. It performs the reverse operation of an array declaration, by declaring each element in the collection as a separate variable. The empty space between 'a' and 'b' is recognized as empty value.

//? 4️⃣ Reflection
//  • How does destructuring help improve the readability of large objects or responses from APIs?
//! Answer: Destructuring makes the code cleaner and more expressive, reducing repetition (obj.key everywhere).

//  • Can you recall a situation in your recent code where destructuring would have made it cleaner?
//! Answer: Using destructuring reduces 'username' code, makes it clearer what properties are being accessed, and can improve readability—especially with nested objects or multiple properties.

//* Instead of:
console.log(product.brand);
console.log(product.model);
console.log(product.price);

//* Do:
const { brand, model, price } = product;
console.log(brand, model, price);


//TODO  🧠 Phase 1: Multiple-Choice Questions — Destructuring & Naming

//! ❗Instructions:
//  Pick the correct answer (A, B, C, or D). I’ll check your responses and explain each one after you answer.

//* Question 1: Basic Object Destructuring
//  What is the value of b in the following code?

const obj = { a: 1, b2: 2 };
const { b2 } = obj;

//  A) 1    B) 2    C) undefined    D) Error

//! Answer: B) 2 - The b2 property is extracted from the obj using destructuring syntax, and its value is 2.

//* Question 2: Array Destructuring
//  What is logged here?

const [x, , y] = [10, 20, 30];
console.log(y);

//  A) 10   B) 20   C) 30   D) undefined

//! Answer: C) 30 - because we count including the empty space between comma.

//* Question 3: Renaming During Destructuring
//  Which option correctly renames a property while destructuring?

//  A) const { name = username } = user;
//  B) const { name: username } = user;
//  C) const username = user[name];
//  D) const username = name in user;

//! Answer: A) const { name: username } = user; - because pull the name property from user, but assign its value to a variable named username.

//* Question 4: Nested Destructuring
//  How would you extract the city from this object?

const user4 = {
    profile: {
        location: {
            city: 'New York',
        },
    },
};

//  A) const { profile.location.city } = user;
//  B) const { city } = user.profile.location;
//  C) const { location: { city } } = user.profile;
//  D) const { city } = user;

//! Answer: C) const { location: { city } } = user.profile; - because we navigate one level at a time: 1. Start with user4.profile; 2. Then destructure the location object inside it; 3. Finally pull out the city from location.

//* Question 5: Default Values
//  What does this log?

const { name2 = 'Guest' } = {};
console.log(name2);

//  A) 'name'
//  B) undefined
//  C) 'Guest'
//  D) null

//! Answer: C) 'Guest' - because the object {} has no name2 property, so it is undefined, but has a default value: = 'Guest'. So JavaScript will assign 'Guest' to name2.


//TODO  ✍️ Phase 2: Short-Answer Questions: Destructuring & Naming

//  Try to answer these in 1–3 lines of code or a short written response.

//* Question 1:
//  Destructure the title and price from this object into variables:

const book = {
    title: 'JavaScript Essentials',
    price2: 29.99,
    author: 'Jane Doe'
};

//! Answer: 
const { title, price2} = book;
console.log(`Buy "${title}" for $${price2}!`);

//* Question 2:
//  Rename the brand property of this object to a new variable called company:

const product2 = {
    brand: 'Sony',
    model: 'A7',
};

//! Answer: 
const { brand: company } = product2;
console.log(company);

//* Question 3:
//  We have a function:

function showUser({ username, role }) {
    console.log(`Username: ${username}`);
    console.log(`Role: ${role}`);
};

//  Use destructuring in the function parameter to access username and role.

//* Question 4:
//  Given this array:

const coords = [40.7128, -74.0060];

//  Destructure the first and second values into latitude and longitude.

//! Answer: 
const [latitude, longitude] = coords ;
console.log(`Lat: ${latitude}, Long: ${longitude}`);

//* Question 5:
//  Destructure this nested object to extract engine:

const car = {
    specs: {
        engine: 'V8',
        horsepower: 500
    }
};

//! Answer: 
const { engine } = car.specs;


//TODO  💡 Challenge:
//  Destructure the following object to extract the cpu and ram, and rename cpu to processor:

const specs = {
    cpu: 'Intel i7',
    ram: '16GB',
    storage: '1TB'
};

//! Answer:

const { cpu: processor, ram } = specs;


//TODO  💡 Challenge:
//  Follow the object:

const response = {
    userId: 42,
    profile: {
        displayName: 'jdoe',
        email: 'jdoe@example.com',
    },
    permissions: ['read', 'write'],
};

//? 🎯 Task:
//  1. Extract userId as id
//  2. Extract displayName as username
//  3. Extract permissions

//! Solution

// const { userId: id } = response;
// const { displayName: username } = response.profile;
// const { permissions } = response;

//  ✅ Single-Step Destructuring:

const {
    userId: id,
    profile: { displayName: username },
    permissions,
} = response;


//TODO  💡 Challenge: Nested Defaults
// We have an object, possibly from an API response:

const config = {
    env: 'production',
    features: {
        logging: true,
    },
};

//? 🎯 Task:
//  1. Destructure env directly.
//  2. Destructure retry from inside features and assign it a default value of 3 if not provided.

//! Solution

const {
    env,
    features: {
        retry = 3
    } = {},              //! default empty object to prevent destructuring error
} = config;

//* 🔍 Breakdown:
//  • env is destructured directly
//  • features.retry is destructured with a default value of 3 if it's missing
//  • If retry is undefined, it becomes 3


//TODO  🧠 Phase 3: Open-Ended Questions – Destructuring & Naming

//* ❓ Question: You are working on a UI that receives a user object from an API with hundreds of fields. Why might destructuring — especially with renaming — improve the maintainability of your code?

// Answer: Destructuring, especially with renaming, can significantly improve code maintainability by making code more readable and easier to modify.

//* ✅ 1. Improves Readability

//  Instead of:
//? user.data.profile.firstName;

//  Write:
//? const { firstName } = user.data.profile;

//  Or even:
//? const { firstName: name3 } = user.data.profile;

//* ✅ 2. Renaming Provides Context
//  Sometimes API field names do not make sense in your app:

const { fn: firstName2 } = user;

//  ✔️ This bridges external naming (e.g. fn) with your internal language (e.g. firstName).

//* ✅ 3. Reduces Duplication
//  Instead of referencing user.profile.age in 10 places, destructure once:

//? const { age4 } = user.profile;

//  ✔️ Makes updates easier — change it once, and all usage is scoped and obvious.

//* ✅ 4. Simplifies Function Interfaces
//  Using destructuring in function parameters avoids repetitive access and makes intent clear:

function displayUser({ name, role }) {
    // no need for user.name or user.role
};


//TODO  🧠 Open-Ended Questions – Destructuring & Naming

//* ❓ Question 1: When working with API data, how can destructuring make your code safer and more predictable — especially when the data shape is not guaranteed?
//! Answer: Destructuring, combined with default values, optional chaining, and validation, makes your code safer and more predictable by explicitly handling potential missing or unexpected data.

//  ✅ Destructuring + Defaults:

const apiUser = 0;

const {
    name4 = 'Unknown',
    profile: {
        email = 'No email provided'
    } = {}
} = apiUser || {};

//  ✔️ This ensures:
//  • The app will not crash on undefined.profile.
//  • We do not need extra if checks all over your logic.

//* ❓ Question 2: What are the trade-offs between destructuring immediately in function parameters vs. doing it inside the function body?
//! Answer: Destructuring in parameters is great for small, focused functions where only a few fields are used. For complex functions that require full object access or future extensibility, destructuring inside the function body provides more control and flexibility..

//?  ✅ Destructuring in Parameters — Pros:

function renderUser({ name, role }) {
    return `${name} - ${role}`;
};

//  🔹 Concise and focused: great for components or utilities.
//  🔹 Makes expected shape explicit: we see right away what the function needs.
//  🔹 Avoids boilerplate: no need to declare variables inside the body.

//!  ❌ Cons of Parameter Destructuring:
//  ❗ Loses the full object — you can’t reference user anymore.
//  ❗ Less flexible: if you later need to pass the object to another function or log it for debugging, you’ll need to reassemble or pass it again.

//? ✅ Destructuring Inside the Function — Pros:

function renderUser(user) {
    const { name, role } = user;
    return `${name} - ${role}`;
};

//  🔹 Retains the entire original object.
//  🔹 More flexible for advanced logic (e.g., passing to logging, conditions).
//  🔹 Easier to refactor when the shape evolves.

//! ❌ Cons:
//  Slightly more verbose.
//  Important props are hidden deeper in the body.

//* ❓ Question 3: How does destructuring compare to traditional dot/bracket notation in terms of performance, readability, and error handling?
//! Answer: Destructuring improves readability by reducing repetition and making intent clearer. In terms of performance, it's roughly equal to dot notation. However, it requires more care for error handling, especially with deeply nested paths, as it can throw if an intermediate object is undefined.

//* ❓ Question 4: Imagine you are working on a team and you receive an object called 'userSettings'. It is massive. How would you decide which parts to destructure and when to rename?
//! Answer: When working with a large object like userSettings, I first identify only the fields my code needs (e.g., theme, notifications, layout) to avoid cluttering my scope.

//? 🔍 Refined Answer:

//  Destructure necessary fields, and if a field name is ambiguous, must be rename it:
//? const { theme2, layout: uilayout, notifications: hasNotifications2 } = userSettings;

//  Use the spread operator to copy the rest of the object only if is necessary to modify the object version:
//? const updateSettings = { ...userSettings, theme: 'dark' };

//* 🎯 Real-World Guidelines:
//  Destructure only what is needed for clarity.
//  Rename fields for contextual meaning (layout ➜ uiLayout, lang ➜ locale).
//  Use ...rest to collect unused fields if you need to pass them along:
//? const { theme3, ...restSettings } = userSettings;

//  🔹 Avoid over-destructuring upfront — it can clutter small functions.

//* ❓ Question 5: In what situations might you avoid using destructuring?
//! Answer: Destructuring improves clarity when you know the shape, but avoiding it gives you visibility and safety when the shape is unpredictable, or when tracing the data path is important.

//?  We might avoid destructuring in cases where:

//  1. We want to preserve the clarity of where a value is coming from, especially in deeply nested or unfamiliar data:
//? console.log(user.settings.language);                // Clear origin

//  2. We need to pass the entire object to another function or log it for debugging:
//? logAnalytics(user);                                 // Cannot do this if you destructured only part of it

//  3. The object is optional or may be undefined, and destructuring it directly could throw a runtime error:
//? const { email2 } = user.profile;                    // ❌ crashes if profile is undefined

//  4. In tight debugging or refactoring loops, seeing the full path (obj.prop.subprop) may be more helpful than isolated variables.

//* ❓ Question 6: What are the risks of destructuring deeply nested objects without default values?
//! Answer: Destructuring deeply nested objects without default values is risky because if any level of the object is undefined, JavaScript will throw a TypeError. This can lead to uncaught runtime errors, especially with external data sources like APIs.

//  ⚠️ Example of the Problem:

const user5 = {};
//? const { profile: { email3 } } = user; // ❌ TypeError: Cannot destructure 'profile' of undefined

//  ✅ Safer Approach (With Defaults):

const { profile: { email4 } = {} } = user;

//  Or using optional chaining (for access, not destructuring):

const email5 = user?.profile?.email;


//* ❓ Question 7: When working with large component props in a front-end framework like React, how does destructuring improve component readability?
//! Answer: In large-scale apps, destructuring props leads to cleaner, more focused, and more maintainable component logic — especially when working with reusable UIs or design systems.

// Destructuring large component props improves readability by:
//  🔹 Making prop access concise and straightforward.
//  🔹 Highlighting the component’s dependencies.
//  🔹 Reducing visual clutter in JSX.
//  🔹 Clarifying expected props upfront.
//  This leads to cleaner, more maintainable, and more understandable component code, especially as the number of props grows.


//* ❓ Question 8: Describe a real-world bug that could happen if you rename a property during destructuring but forget to update its usage in the function.
//! Answer: A real-world bug can occur if we rename a property within an object during destructuring, but forget to update the corresponding variable name where the property is used within a function. This can lead to unintended consequences, such as using a "ghost" or "stale" property name instead of the intended new one, resulting in incorrect logic or even runtime errors.

//  ✅ Example Bug Scenario:

const user6 = { username: 'jdoe' };
const { username: name5 } = user;
console.log(username); // ❌ ReferenceError: username is not defined

//  Or worse — we might reference an outdated variable that does exist:

const { username: name6 } = user;
const username2 = 'admin';                                      // ghost value
console.log(username2);                                         // Logs 'admin', not 'jdoe' — logic bug

//! ❗ Real-World Consequences:
//  🔹 Silent bugs (wrong data used)
//  🔹 Confusing errors (undefined instead of expected value)
//  🔹 Difficult debugging, especially in team settings
//  🔹 Failures in UI rendering or API payloads

//* ❓ Question 9: Why might you combine destructuring with default values when reading user input or configuration?
//! Answer: Using destructuring with default values helps create robust, predictable code by ensuring that missing or incomplete user input or configuration does not cause errors or unpredictable behavior. It provides clear, concise defaults and makes your intent explicit.

// 📘 Example 1: Config Defaults

const config2 = {};
const { theme4 = 'light', debug = false } = config;

console.log(theme4); // 'light'
console.log(debug);  // false

//  ✔️ Prevents undefined values from leaking into your app

//  📘 Example 2: Form Input

function handleForm({ name = '', email = '', subscribed = false }) {
    // Safe to use all fields with known fallbacks
};

//  ✔️ Keeps UI predictable and avoids broken logic like rendering undefined.

//* ❓ Question 10: How could destructuring and renaming help you enforce consistent naming across different layers of a system (e.g., backend, frontend, database)?
//! Answer: Destructuring with renaming acts as a bridge, translating different naming conventions into a unified internal style. This promotes consistency, reduces errors, and decouples your application's internal logic from external data formats across system layers.

//  🧪 Real-World Scenario:
//  Let’s say backend sends data like this:

// {
//     "user_id": 123,
//     "full_name": "Alice Jones",
//     "is_admin": true
// };

//  In frontend code, instead of:

const apiResponse = 0;

const user7 = apiResponse;
const id7 = user7.user_id;
const name7 = user7.full_name;

//  We can do:

const {
    user_id: userId,
    full_name: fullName,
    is_admin: isAdmin
} = apiResponse;

//  ✅ Benefits You Correctly Identified:
//  🔹 Consistency across codebase layers (DB, API, UI)
//  🔹 Decoupling internal logic from external naming
//  🔹 Error reduction from misaligned expectations
//  🔹 Easier refactoring when APIs change — you only update the destructuring once


//TODO  🧪 Challenge/Project: Config-Driven Feature Manager

//* 🎯 Goal:
//  Simulate a scenario where we are consuming a user configuration object (like from an API or a settings file) and applying destructuring with:
//  • ✅ Renaming
//  • ✅ Default values
//  • ✅ Nested access
//  • ✅ Clean, self-documenting variables

//* 📦 Scenario:
//  You’re building a loadUserSettings() function that reads a configuration object and prepares settings for your app’s UI and permissions system.

//  You receive this object:

const userSettings = {
    user_id: 1201,
    profile: {
        full_name: 'Alice Jones',
        theme: 'dark',
        preferences: {
        notifications: true
        }
    },
    roles: ['editor', 'contributor'],
    is_admin: false
};

//*  🧠 Tasks:

//*  ✅ Step 1: Destructure and rename the following:
//  • user_id ➜ userId
//  • full_name ➜ name
//  • theme ➜ uiTheme
//  • notifications ➜ hasNotifications
//  • is_admin ➜ isAdmin

//* ✅ Step 2: Use default values:
//  • If preferences.notifications is missing ➜ default to false.
//  • If theme is missing ➜ default to 'light'.

//* ✅ Step 3: Log a message:
//  User Alice Jones (ID: 1201) has chosen the dark theme.
//  Notifications enabled: true
//  Admin access: false

//* 💡 Optional Bonus:
//  Create a getUserSettingsSummary(settings) function that accepts the userSettings object and returns a string summary using destructuring internally.

//! Solution

//* Step 1.
//* Step 2.

const {
    user_id: userId11,
    is_admin: isAdmin11,
    profile: {
        full_name: name11,
        theme: uiTheme11 = 'light',
        preferences: {
        notifications: hasNotifications11 = false
        } = {},
    } = {},
} = userSettings;

//* step 3.

console.log(`User ${name11} (ID: ${userId11}) has chosen the ${uiTheme11} theme.`);
console.log(`Notifications enabled: ${hasNotifications11}`);
console.log(`Admin access: ${isAdmin11}`);

//* Bonus

function getUserSettingsSummary({
    user_id,
    profile: {
        full_name,
        theme = 'light',
        preference: { notifications = false } = {},
    },
    is_admin,
}) {
    return `User ${name11} (ID: ${userId11}) has chosen the ${uiTheme11} theme.\n` + `Notifications enabled: ${notifications}\n` + `Admin access: ${isAdmin11}`;
};

console.log(getUserSettingsSummary(userSettings));


//TODO  🧪 Challenge: Order Receipt Processor

//* 📦 Scenario:
//  A team is working on an eCommerce system that processes orders. Each order contains customer info, product info, and optional metadata.

//* 🧾 Sample Order Object:

const order = {
    order_id: 'ORD-9098',
    customer: {
        full_name: 'Jordan Smith',
        email: 'jordan@example.com',
    },
    product: {
        name: 'Noise-Cancelling Headphones',
        price: 129.99,
    },
    metadata: {
        coupon: 'WELCOME10',
        gift: true,
    },
};

//* 🎯 Task:
//? ✅ Step 1: Destructure and rename the following:
//  • order_id ➜ orderId
//  • full_name ➜ customerName
//  • email ➜ customerEmail
//  • name (product name) ➜ productName
//  • price ➜ productPrice
//  • coupon ➜ discountCode
//  • gift ➜ isGift

//? ✅ Step 2: Apply defaults if missing:
//  • coupon ➜ default to 'NO_CODE'
//  • gift ➜ default to false

//? ✅ Step 3: Display this formatted message:
//  Order #ORD-9098
//  Customer: Jordan Smith (jordan@example.com)
//  Item: Noise-Canceling Headphones - $129.99
//  Gift: true
//  Discount Code: WELCOME10

//? 🔧 Bonus:
//  Wrap this into a function called printOrderSummary(order)
//  • ✅ Accepts an order object.
//  • ✅ Uses destructuring internally.
//  • ✅ Returns or logs the full formatted summary.

//! Solution

//* Step 1.
//* Step 2.

const {
    order_id: orderId,
    customer: {
        full_name: customerName,
        email: customerEmail,
    } = {},
    product: {
        name: productName,
        price: productPrice,
    } = {},
    metadata: {
        coupon: discountCode = 'NO_CODE',
        gift: isGift = false,
    } = {},
} = order;

//* Step 3.

console.log(`Order: ${orderId}`);
console.log(`Customer: ${customerName} ${customerEmail}`);
console.log(`Item: ${productName} - $${productPrice}`);
console.log(`Gift: ${isGift}`);
console.log(`Discount Code: ${discountCode}`);

//* Bonus

function printOrderSummary({
    order_id: orderId,
    customer: {
        full_name: customerName,
        email: customerEmail,
    } = {},
    product: {
        name: productName,
        price: productPrice,
    } = {},
    metadata: {
        coupon: discountCode = 'NO_CODE',
        gift: isGift = false,
    } = {},
}) {
    return  `Order: ${orderId}\n` +
            `Customer: ${customerName} ${customerEmail}\n` +
            `Item: ${productName} - $${productPrice}\n` +
            `Gift: ${isGift}\n` +
            `Discount Code: ${discountCode}`;
};

console.log(printOrderSummary(order));
