import express from "express";
import morgan from "morgan";
import { renderRoutes } from "./routes/renderRoutes.js";
import dotenv from 'dotenv';
dotenv.config({ path: "D:/Projetos/Pai Organiza/.env" });
const port = process.env.PORT || 80;

const app = express();

// Middlewares
app.use(express.static('../public'));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use(renderRoutes);


app.listen(port);

// 404 Handler
app.use((req, res) => {
  res.status(404).send('Sorry cant find that')
});