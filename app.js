import express from "express";
import https from "https"
import fs from "fs";
import helmet from "helmet";
import morgan from "morgan";
import { renderRoutes } from "./routes/renderRoutes.js";

const app = express()

// Config dos certificados
const options = {
  key: fs.readFileSync('C:\\Users\\vinic\\Certificados\\cert.key'),
  cert:fs.readFileSync('C:\\Users\\vinic\\Certificados\\cert.crt')
}

// Middlewares
app.set('view engine', 'ejs')
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      imgSrc: ["'self'", "https://picsum.photos", "https://fastly.picsum.photos"]
    },
  },
}));
app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use(renderRoutes);

https.createServer(options, app).listen(443)

// 404 Handler
app.use((req, res) => {
  res.status(404).send('Sorry cant find that')
});