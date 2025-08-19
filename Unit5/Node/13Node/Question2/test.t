# How to Test
# Get Ethereal test credentials:
# // Temporary test credentials
# const nodemailer = require("nodemailer");
# (async () => {
#   let testAccount = await nodemailer.createTestAccount();
#   console.log(testAccount);
# })();
# Put the generated user and pass into .env.
# Run:
# nodemon server.js
# Test routes with Postman:
# POST /signup
# POST /login
# POST /forgot-password
# POST /reset-password/:token