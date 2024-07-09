import Todo from '../model/task.js';

export const addTask = async (req, res) => {
    const { title, description, completed } = req.body;

    try {
        const newTodo = new Todo({
            title,
            description,
            completed
        });

        const savedTodo = await newTodo.save();
        res.status(201).json(savedTodo);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const updateTask = async (req, res) => {
    const { id } = req.params;
    const { title, description, completed } = req.body;

    try {
        const updatedTodo = await Todo.findByIdAndUpdate(
            id,
            { title, description, completed },
            { new: true, runValidators: true }
        );

        if (!updatedTodo) {
            return res.status(404).json({ message: 'Task not found' });
        }

        res.status(200).json(updatedTodo);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deleteTask = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedTodo = await Todo.findByIdAndDelete(id);

        if (!deletedTodo) {
            return res.status(404).json({ message: 'Task not found' });
        }

        res.status(200).json({ message: 'Task deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getTodos = async (req, res) => {
    try {
        const todos = await Todo.find();
        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
