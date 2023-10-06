import express from 'express';
import carController from '../controllers/carController.mjs';

const router = express.Router();

router.get('/', (req, res) => res.json({ message: 'Hello, world!' }));
router.get('/carros', carController.buscarTodos);

export default router;
