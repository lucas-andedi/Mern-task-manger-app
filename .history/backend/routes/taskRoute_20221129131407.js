const express = require('express');
const { createTask, getTasks, getTask, deleteTask, updateTask } = require('../controllers/taskController');
const Task = require('../models/taskModel');
const router = express.Router()

// router.route("/").get(getTasks).post(createTask)
// router.delete("/:id", deleteTask);
// router.route(":/id").get(getTask).delete().put(updateTask)



module.exports = router