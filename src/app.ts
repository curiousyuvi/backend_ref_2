import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import morgan from "morgan";
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import routes from "./router";
import cookieParser from "cookie-parser";

dotenv.config();

// Enable if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
// see https://expressjs.com/en/guide/behind-proxies.html
// app.set('trust proxy', 1);

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});

const allowedOrigins = [
  "https://exhime.com",
  "https://dev.exhime.com",
  "http://localhost:3000",
];

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PATCH", "DELETE"],
  credentials: true,
  allowedHeaders: ["postman-token", "Content-Type"],
};

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(cors(corsOptions));
app.use(helmet());
app.use(morgan("tiny"));

const swaggerJsDocOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Exhime REST API",
      version: "0.0.1",
      description: "Rest API for Exhime",
    },
  },
  apis: ["./src/routes/**/**.ts"], // files containing annotations as above
};

const swaggerOptions = {
  // explorer: true,
};

const swaggerDocs = swaggerJsDoc(swaggerJsDocOptions);

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocs, swaggerOptions)
);

app.use(limiter);

app.use(routes);

export default app;
