import express from "express";

const router = express.Router()

router.get('/', (req, res) => {
  res.render('index', {
    title: 'Dashboard',
    username: "Sanne"
  })
});

export { router as renderRoutes };