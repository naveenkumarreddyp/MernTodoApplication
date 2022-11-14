const mongoose = require("mongoose");

const TodoSchema = mongoose.Schema(
    {
        name: {
            type: String,
            require: [true, "Please add task"]
        },
        completed: {
            type: Boolean,
            require: true,
            default: false
        }
    }, {
    timestamps: true
}

)

const Todo = mongoose.model("Todo", TodoSchema);
module.exports = Todo;