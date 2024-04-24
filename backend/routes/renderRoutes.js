import express from "express";
import { body } from "express-validator";

const router = express.Router()

router.get('/', (req, res) => {
  res.sendFile('index.html', { root: '../public'});
});

// Sanitize user's input
router.post('/', body('inputTaskValue').trim().escape(), async (req, res) => {
  try {
    // Stores user's input
    const { inputTaskValue } = req.body
   
    // Generates a unique identifier
    const id = crypto.randomUUID();

    // Return sanitized input and ID
    res.status(200).json({
      inputTaskValue,
      id
    })
  } catch (error) {
    res.status(500)
  }
})

export { router as renderRoutes };