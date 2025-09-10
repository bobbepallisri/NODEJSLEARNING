# Introduction to Node.js | Part 2 | Cheat Sheet

## Concepts in Focus
- Core Modules
- Path
- Package
- Node Package Manager (NPM)
- Steps to create a Node.js Project
- Third-Party Packages
- date-fns

---

## 1. Core Modules
Core Modules are built into Node.js. Some commonly used modules are:

| Module | Description |
|--------|-------------|
| `path` | Handles file paths |
| `fs`   | Handles the file system |
| `url`  | Parses URL strings |

### 1.1 Path
The `path` module provides utilities for working with file and directory paths.

**Example:**
```javascript
const path = require('path');
console.log(path.join(__dirname, 'myfolder', 'file.txt'));
Output:

makefile
Copy code
C:\Users\YourName\myfolder\file.txt
Note: Many developers prefer CommonJS modules over ES6 syntax as ES6 modules are still experimental in Node.js.

2. Package
A package is a directory with one or more modules grouped together.

2.1 Node Package Manager (NPM)
NPM is the package manager for Node.js. It has over one million packages.

It provides a CLI to publish, discover, install, and develop Node.js programs.

2.1.1 CLI Commands
Command	Description
npm init -y	Initializes a project and creates package.json
npm install <package-name> --save	Installs third-party packages

3. Steps to Create a Node.js Project
Create a new directory:

bash
Copy code
mkdir myapp
Move into the folder:

bash
Copy code
cd myapp
Initialize the project:

bash
Copy code
npm init -y
4. Third-Party Packages
Third-party packages are external Node.js packages developed by the Node.js community.

4.1 date-fns
date-fns is a third-party package for manipulating JavaScript dates in a browser and Node.js.

Installation:

bash
Copy code
npm install date-fns --save
4.1.1 addDays
Adds the specified number of days to a given date.

Example:

javascript
Copy code
const { addDays } = require('date-fns');

const result = addDays(new Date(2025, 8, 10), 5);
console.log(result);
Output:

makefile
Copy code
2025-09-15T00:00:00.000Z
Note: When creating a Date() object, months are 0-indexed (Jan=0, Dec=11), but output considers Jan=1, Dec=12.