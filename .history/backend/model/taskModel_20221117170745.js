const mongoose = require('mongoose');

const taskSchema = mongoose.Schema(
    {
        name: {
            type: String
        }
    }
)