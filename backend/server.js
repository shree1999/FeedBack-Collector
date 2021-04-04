require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const passport = require("passport");
const cookieSession = require("cookie-session");

const { connectDatabase } = require("./config/db");
const { useGoogleStrategy } = require("./services/passport");
const authRoutes = require("./routes/auth");
const paymentRoutes = require("./routes/payment");
const serveyRoutes = require("./routes/survey");

const app = express();
const PORT = process.env.PORT;
connectDatabase();
useGoogleStrategy();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIE_KEY],
  })
);
app.use(passport.initialize());
app.use(passport.session());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/api/google", authRoutes);
app.use("/api/stripe", paymentRoutes);
app.use("/api/surveys", serveyRoutes);

app.listen(PORT, () => {
  console.log(`Server up and running on port ${PORT}`);
});
