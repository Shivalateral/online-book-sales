 # Online Book Sales - Bookstore Platform

## Project Description
The **Online Book Sales** project is a bookstore platform designed to manage book sales and customer interactions. The project features a robust backend using Node.js and MySQL and a user-friendly frontend built with EJS templates.

## Table of Contents
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [License](#license)

## Technologies Used
- **Backend**: Node.js, MySQL
- **Frontend**: EJS (Embedded JavaScript)
- **Tools**: MySQL Shell, VS Code

## Project Structure

### Frontend (views):
- `about.ejs`: About the bookstore.
- `books.ejs`: Displays the available books.
- `cart.ejs`: Shopping cart interface.
- `checkout.ejs`: Checkout process for purchases.
- `index.ejs`: Home page.
- `customer.ejs`: Customer account details.

### Backend (src/models):
- `bookmodel.js`: Handles book-related data and operations.
- `customermodel.js`: Manages customer data.
- `ordermodel.js`: Processes and stores order information.
- `app.js`: Entry point for the server and application logic.

## Installation
Follow these steps to set up the project locally:

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd online-book-sales
   ```

2. Initialize the project:
   ```bash
   npm init -y
   ```

3. Install dependencies:
   ```bash
   npm install bcryptjs mysql express-session body-parser
   ```

4. Set up the database using MySQL Shell.

5. Run the server:
   ```bash
   node app.js
   ```

6. Access the application in your browser at:
   ```

   http://localhost:3000
   ```

## Usage
1. Navigate to the application home page.
2. Browse books, add them to the cart, and proceed to checkout.
3. Manage customer details and review order history.

## Features
- **User-Friendly Interface**: Simple and intuitive navigation.
- **Secure Authentication**: Passwords hashed with bcryptjs.
- **Dynamic Content Rendering**: Powered by EJS templates.
- **Database Integration**: Robust MySQL support for data management.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

---
Feel free to contribute to the project or suggest enhancements!






























