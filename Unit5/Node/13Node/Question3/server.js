// install express mongoose bcryptjs jsonwebtoken dotenv nodemailer swagger-ui-express uuid
const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const swaggerUi = require("swagger-ui-express");
const swaggerDoc = require("./swagger.json");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/dishes", require("./routes/dishRoutes"));
app.use("/api/orders", require("./routes/orderRoutes"));
app.use("/api/password", require("./routes/passwordRoutes"));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.listen(process.env.PORT, () =>
  console.log(`🚀 Server running on port ${process.env.PORT}`)
);
