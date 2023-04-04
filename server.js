const express = require('express');
const app = express();
const taskDetails = require('./dao/taskDetails');


app.get("/getAllTasks",async (req, res) => {
    try {
        let tasks = await taskDetails.getAllTasks();
        console.log("tasks..: ", tasks);
        res.send({
            data: tasks,
            message: "Task fetched succefully",
            code: 200,
          });
    } catch (err) {
        console.log("err..: ",err);
    }
});

app.get("/getTaskById",async (req, res) => {
    try {
        let taskId  = req.query.taskId;
        let tasks = await taskDetails.getTaskById(taskId);
        console.log("tasks..: ", tasks);
        res.send({
            data: tasks,
            
            message: "Task fetched succefully",
            code: 200,
          });
    } catch (err) {
        console.log("err..: ",err);
    }
});

app.get("/createTask",async (req, res) => {
    try {
    
       let newTask = {
            task_name: "hello"
        }
       
        let tasks = await taskDetails.createTask(newTask);
        res.send({
            data: tasks,
            message: "Task created succefully",
            code: 200,
          });
    } catch (err) {
        console.log("err..: ",err);
    }
});

app.get("/updateTask",async (req, res) => {
    try {
        let taskId  = req.query.taskId;
        let updatedTask = {
            task_name: ".........."
        }
        let tasks = await taskDetails.updateTask(taskId, updatedTask);
        res.send({
            data: tasks,
            message: "Task updated succefully",
            code: 200,
          });
    } catch (err) {
        console.log("err..: ",err);
    }
});

app.get("/deleteTask",async (req, res) => {
    try {
        let taskId  = req.query.taskId;
        
        let tasks = await taskDetails.deleteTask(taskId);
        res.send({
            data: tasks,
            message: "Task deleted succefully",
            code: 200,
          });
    } catch (err) {
        console.log("err..: ",err);
    }
});

const server = app.listen(5098, function () {
    console.log("Listening on port %s...", server.address().port);
})