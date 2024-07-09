  import express from 'express';
  import { addTask, updateTask, deleteTask } from '../controllers/taskControllers.js';

  const { Router } = express;

  const router = Router();

  router.post('/addTask', addTask);
  router.put('/updateTask/:id', updateTask);
  router.delete('/deleteTask/:id', deleteTask);

  export default router;
