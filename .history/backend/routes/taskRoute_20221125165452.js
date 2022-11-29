const express = require('express');
const Task = require('../model/taskModel');
const router = express.Router()

// Create a Task
router.post('/api/task', createTask)

// Get/Read tasks
router.get("/api/task", async (req,res) => {
    try {
        const tasks = await Task.find()
        res.status(200).json(tasks)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
})

module.exports = router