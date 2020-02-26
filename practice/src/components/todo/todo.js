import React, { Component, createRef } from 'react';
import styles from './todo.module.scss';

class Todo extends Component {
    constructor(props){
        super(props);
        this.state = {
            todos: []
        }
        this.inputVal = createRef();
        this.todoRef = createRef();
    }

    handleClick(){
        const val = this.inputVal.current.value;
        if (val === ''){
            alert('no empty todos');
        } else {
            this.setState({
                todos: [...this.state.todos, val]
            })
            this.inputVal.current.value = '';
        }
    }

    removeTodo(data){
        const newTodoArray = this.state.todos.filter((item)=>item!==data);
        this.setState({
            todos: [newTodoArray]
        })
    }

    render() {
        return (
            <>
                <div>
                    <input 
                        type="text"
                        ref={this.inputVal}
                        placeholder="...enter Todos"
                        name="todos"/>
                    <button onClick={()=>this.handleClick()}>submit</button>
                </div>
                <h3>Click on ToDos to remove them once done</h3>
                <ul>
                    {this.state.todos.map((data, i) => {
                        return (<>
                                 <li key={data + i} onClick={()=>this.removeTodo(data)}>{data}</li> 
                                </>
                                 )
                    })}
                </ul>
            </>
        )
    }

}

export default Todo