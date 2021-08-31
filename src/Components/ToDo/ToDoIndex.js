import React, {Component} from 'react'

export default class ToDoIndex extends Component {
    constructor(props){
        super(props)
            this.state = {
                todos: [],
                completed: [],
                task: "",
                completedtask: ""
            }

            this.addTodo = this.addTodo.bind(this)
            this.updateTodo = this.updateTodo.bind(this)
            this.handleTask = this.handleTask.bind(this)
    }

    handleTask(e){
        this.setState({task:e.target.value})
    }

    handleCompletedTask(e){
        this.setState({completedtask:e.target.value})
    }

    updateTodo(){
        

        var delTask = this.state.todos
        delTask = delTask.filter(e => e!== this.state.completedtask) //newTask.push(this.state.completedtask)
        this.setState({todos: delTask})

        const newTask = this.state.completed
        var donetask = delTask.filter(e => e=== this.state.completedtask)
        newTask.push(donetask)
        this.setState({completed: newTask})


    }

    addTodo(){
        const newTask = this.state.todos
        var item = newTask.filter(e => e=== this.state.task)
        if (item.length === 0) {
            newTask.push(this.state.task)
            this.setState({todos: newTask})
        }

    }

    render(){
        return(
            <div>
                <input type="string" placeholder="Enter your ToDo item" onChange={(e)=>this.handleTask(e)}></input>
                <button onClick={()=>this.addTodo()}>Add this task</button>
                <div>
                <ul>
                {this.state.todos.map((todo) => {
                    return <li>{ todo }</li>
                    })}
                </ul>
                </div>
                <hr/>
                <input type="string" placeholder="Enter Completed item" onChange={(e)=>this.handleCompletedTask(e)}></input>
                <button onClick={()=>this.updateTodo()}>Mark this task Completed</button>
                <ul>
                  {this.state.completed.map((item) => {
                    return <li>{ item }</li>
                    })}

                </ul>
            </div>

        )
    }
}