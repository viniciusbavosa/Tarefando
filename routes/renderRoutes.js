import express from "express";

const router = express.Router()


router.get('/', (req, res) => {
  res.render('index', {
    title: 'Início',
    username: "Sanne"
  })
});

router.post('/', (req, res) => {
  const task = []
  task.push(req.body.value)
  res.status(200).json({
    task
  });
})

export { router as renderRoutes };