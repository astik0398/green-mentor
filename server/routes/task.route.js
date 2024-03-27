const express = require('express')
const taskRouter = express.Router()
const {taskModel} = require('../model/task.model')

taskRouter.get('/', async(req, res)=> {
    try {
        const tasks = await taskModel.find()
        res.status(200).send(tasks)
    } catch (error) {
        console.log(error);
    }
})

taskRouter.post('/add', async(req, res)=> {
    try {
        const task = new taskModel({
            ...req.body
        })
        await task.save()
        res.status(200).send({"message": "task has been added !"})
    } catch (error) {
        console.log(error);
    }
})

taskRouter.delete('/:_id', async(req, res)=> {
    const {_id} = req.params
    try {
        await taskModel.findByIdAndDelete({_id})
        res.status(200).send({"message": "task deleted successfully !"})
    } catch (error) {
        console.log(error);
    }
})

taskRouter.patch('/:_id', async(req, res)=> {
    const {_id} = req.params
    try {
        await taskModel.findByIdAndUpdate({_id}, req.body)
        res.status(200).send({"message": "task updated successfully !"})
    } catch (error) {
        console.log(error);
    }
})

module.exports = {
    taskRouter
}