# Bcrypt Password Comparison Script

This is a Node.js script that compares a hashed password with a list of hashed passwords from a file named `passwords.txt`. The hashing algorithm used is bcrypt.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them:

- Node.js
- npm

### Installing

A step by step series of examples that tell you how to get a development environment running:

1. Clone the repository: `git clone https://github.com/AhmedReda958/yourrepository.git`
2. Navigate into the directory: `cd crack-bcrypt-passwords`
3. Install the dependencies: `npm install`

### Usage

To run the script, use the following command:

```bash
npm start
```

or

```bash
node index.js
```

or

```bash
node index.js 'yourHashdPassword'
```

Make sure to create a `passwords.txt` file with your passwords, with each password on a separate line. Then, run the project.
