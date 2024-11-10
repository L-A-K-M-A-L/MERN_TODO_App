const TaskModel = require('../models/TaskModel');

//  Add task to DB
module.exports.getTasks = async ( req, res ) => {
        const tasks = await TaskModel.find()
        res.send(tasks);
}

// saveTask -> create
module.exports.saveTasks = ( req, res ) => {
    const { task } = req.body;

    TaskModel.create( { task })
    .then( (data) => {
        console.log("Task Saved Success...");

        res.status(201).send(data);
    })
    .catch((err)=>{
        console.log(err);
        res.send({ error: err, message: "Task Saved Failed.." });
    })
};

// update Task
module.exports.updateTasks = ( req, res ) => {
    const { id } = req.params;
    const { task } = req.body;


    TaskModel.findByIdAndUpdate(id, { task })
    .then(()=>{
        res.send(("Task Updated Succesfuly"))
    })
    .catch((err)=>{
        console.log(err);
        res.asend({ error: err, message: "Task Updated Failed.." });
    })
};

// Delete Task
module.exports.deleteTasks = ( req, res ) => {
    const { id } = req.params;

    TaskModel.findByIdAndDelete(id)
    .then(()=>{
        res.send(("Task Deleted Succesfuly"))
    })
    .catch((err)=>{
        console.log(err);
        res.asend({ error: err, message: "Task Delete Failed.." });
    })
};