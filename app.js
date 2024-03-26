import express from "express";
import https from "https"

const app = express()

// Middlewares
app.disable('x-powered-by');

app.get('/', (req, res) => {
  res.send('Conectado')
})
app.listen(5252)

// 404 Handler
app.use((req, res) => {
  res.status(404).send('Sorry cant find that')
})