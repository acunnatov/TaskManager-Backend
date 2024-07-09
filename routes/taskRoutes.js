import express from 'express';
import { addTask, updateTask, deleteTask, getTodos } from '../controllers/taskControllers.js';

const router = express.Router();

router.post('/addTask', addTask);
router.put('/updateTask/:id', updateTask);
router.delete('/deleteTask/:id', deleteTask);
router.get('/todos', getTodos); 

export default router;
