const fs = require("fs");
const bcrypt = require("bcrypt");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// compare hashed password function
async function comparePasswords(hashedPassword, passwordsList) {
  // loop through the passwords
  for (let i = 0; i < passwordsList.length; i++) {
    const password = passwordsList[i];
    // compare the password with the hashed password
    await bcrypt.compare(password, hashedPassword, (err, res) => {
      if (err) {
        console.log("Error comparing the passwords");
        console.error(err);
        return;
      }
      // if the password is found
      if (res) {
        console.log("Password found: " + password);
        rl.close();
        return password;
      }
      if (i === passwordsList.length - 1 && !res) {
        console.log("Password not found");
        rl.close();
        return null;
      }
    });

    console.clear();
    console.log(
      "Passwords checked: " + (i + 1),
      "(" + Math.floor(((i + 1) / passwordsList.length) * 100) + "%)"
    );
  }
}

// read the password.txt file
fs.readFile("passwords.txt", "utf8", async (err, data) => {
  if (err) {
    console.log("Error reading the file");
    console.error(err);
    return;
  }
  // split the data by new line
  const passwordsList = data.split("\r\n");
  // get the password from the user
  if (process.argv[2]) {
    const hashedPassword = process.argv[2];
    // compare the password
    await comparePasswords(hashedPassword, passwordsList);
  } else {
    rl.question("Enter the hashed password: ", async (hashedPassword) => {
      // compare the password
      await comparePasswords(hashedPassword, passwordsList);
    });
  }
});

rl.on("close", () => {
  console.log("Exiting...");
  process.exit(0);
});
