const express = require('express');
const Task = require('../model/taskModel');
const router = express.Router()

// Create a Task
router.post('/api/task', async (req, res) => {
    try {
        const task = await Task.create(req.body)
        res.status(200).json(task)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
})


module.exports = router