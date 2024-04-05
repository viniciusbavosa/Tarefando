import express from "express";

const router = express.Router()


router.get('/', (req, res) => {
  res.render('index', {
    title: 'Início',
    username: "Sanne"
  })
});

router.post('/', (req, res) => {
  let task = ''
  task = req.body.value
  res.status(200).json({
    task
  });
})

export { router as renderRoutes };