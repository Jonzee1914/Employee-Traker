# Employee-Traker

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

This is a Content Management System built using Node.js, Inquirer, and MySQL to accept command-line input to allow a user to manage a company's employee database.

The application allows the user to:
1. View All Employees
2. View All Employees By Department
3. View All Employees By Manager
4. View All Departments
5. View All Roles
6. Add Employee
7. Add A Role
8. Add A Department
9. Remove An Employee
10. Update An Employee Role

## Table of Contents

* [Usage](#usage)
* [Installation](#installation)
* [Preview](#preview)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Usage

Follow the on screen prompts to work through the application, in order to manage a company's employee database.

## Installation

1. Clone the repo to your computer.
2. From the root of the application's directory run 
```shell
npm install
```
to ensure all necessary packages are installed.
3. Open connection.js in the db folder.
4. Enter your mysql password where noted and save the file.
5. From the command line in your terminal run mysql by typing the command:
```shell
mysql -u root -p
```
6. Create the database by typing the command:
```shell
SOURCE db/schema.sql
```
7. An additional seeds.sql file is included if you would like to add a generic list of employees to test the functionality of the app. To seeds the tables in your database with this data run:
```shell
SOURCE db/seeds.sql
```
8. Quit mysql by typing q in the command line and hitting enter
9. You are now ready to run the application by entering the command:
```shell
npm start
```

## Preview
Click the gif to see a full video demo of functionality  return
[![](https://github.com/Jonzee1914/Employee-Traker/blob/main/Employee-Tracker.gif?raw=true)](https://youtu.be/_U4pbWoI25k)
-- https://youtu.be/_U4pbWoI25k --

## License

    								MIT License

    		"Employee-Tracker"   Copyright (C) 2021 Erik Jones

    		Permission is hereby granted, free of charge, to any person obtaining a copy
    		of this software and associated documentation files (the "Software"), to deal
    		in the Software without restriction, including without limitation the rights
    		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    		copies of the Software, and to permit persons to whom the Software is
    		furnished to do so, subject to the following conditions:

    		The above copyright notice and this permission notice shall be included in all
    		copies or substantial portions of the Software.

    		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    		SOFTWARE.

## Contributing

If you would like to contribute to this application, email me via the email found in the questions section.

## Tests

This repo includes a seed file (db/seeds.sql) that allows you to test the functionality of the application before entering in your own company's data.

## Questions

Any questions? Checkout my [Github profile](https://github.com/Jonzee1914) or email me @ [jonzee1914@gmail.com](mailto:jonzee1914@gmail.com)
