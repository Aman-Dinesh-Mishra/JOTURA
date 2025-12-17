import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import notesRoutes from "./routes/notes.routes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middlewares/rateLimiter.middlewares.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;
const __dirname = path.resolve();
connectDB();

// middleware
if (process.env.NODE_ENV !== "production") {
  app.use(
    cors({
      origin: "http://localhost:5173", // allow requests from your React dev server
      methods: ["GET", "POST", "PUT", "DELETE"], // explicitly allow common methods
      allowedHeaders: ["Content-Type", "Authorization"], // allow headers used by axios
      credentials: true,
    })
  );
}
app.use(express.json());

// Apply rate limiter only to notes route
app.use("/api/notes", rateLimiter, notesRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
  });
}
// Custom middleware banane ka tarika
// app.use((req, res, next) => {
//   console.log(`Request method is ${req.method} & Request URL is ${req.url}`);
//   next();
// });

app.listen(PORT, () => {
  console.log("Server running on the PORT: ", PORT);
});
